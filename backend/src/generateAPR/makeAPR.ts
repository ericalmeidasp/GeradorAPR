const zipper = require('zip-local')
// import zipper from 'zip-local'
import fs from 'fs'
import { newSheet, finalPlan } from './newtable'
import { APR } from '../typagem'

export const generatePlan = (dataApr: APR) => {

    const tables = newSheet(dataApr);

    let dataTablesAPR: string = ''

    for (let i = 0, len = tables.length; i < len; i++) {
        dataTablesAPR += tables[i];
    }

    const structurePlan = finalPlan(dataApr)
    const Plan = structurePlan[0] + dataTablesAPR + structurePlan[1]

    const aprURL = './src/generateAPR/APRs/' + dataApr.number

    fs.mkdirSync(aprURL + '/unzipped/media/', { recursive: true })
    fs.mkdirSync(aprURL + '/unzipped/META-INF/', { recursive: true })

    fs.writeFileSync(aprURL + '/unzipped/media/image1.png', fs.readFileSync('./src/generateAPR/modelo/media/image1.png'));
    fs.writeFileSync(aprURL + '/unzipped/media/image2.png', fs.readFileSync('./src/generateAPR/modelo/media/image2.png'));
    fs.writeFileSync(aprURL + '/unzipped/META-INF/manifest.xml', fs.readFileSync('./src/generateAPR/modelo/META-INF/manifest.xml'));
    fs.writeFileSync(aprURL + '/unzipped/meta.xml', fs.readFileSync('./src/generateAPR/modelo/meta.xml'));
    fs.writeFileSync(aprURL + '/unzipped/mimetype', fs.readFileSync('./src/generateAPR/modelo/mimetype'));
    fs.writeFileSync(aprURL + '/unzipped/styles.xml', fs.readFileSync('./src/generateAPR/modelo/styles.xml'));
    fs.writeFileSync(aprURL + "/unzipped/content.xml", Plan);

    zipper.sync.zip(aprURL + "/unzipped/").save(aprURL + `/APR${dataApr.number}.ods`);
    fs.rmSync(aprURL + '/unzipped', { recursive: true })


    return aprURL + `/APR${dataApr.number}.ods`
}
