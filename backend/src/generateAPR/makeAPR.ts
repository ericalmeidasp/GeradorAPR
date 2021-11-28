const zipper = require('zip-local')
const CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
const defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;
// import zipper from 'zip-local'
import fs from 'fs'
import { newSheet, finalPlan } from './newtable'
import { APR } from '../typagem'


export const generatePlan = (dataApr: APR) => {
    
    const Apikey = defaultClient.authentications['Apikey'];
    Apikey.apiKey = '1a8d0f97-50d3-441f-be0d-a220aa5fc3be';
    const apiInstance = new CloudmersiveConvertApiClient.ConvertDocumentApi();

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

    const inputFile = fs.readFileSync(aprURL + `/APR${dataApr.number}.ods`); // inputFile = aprURL + `/APR${dataApr.number}.ods`;

    const callback = function(error:any, data:any, response:any) {
        if (error) {
          console.error(error);
        } else {
            fs.writeFileSync(aprURL + `/APR${dataApr.number}.pdf`, data)
          console.log('API called successfully. Returned data: ');
        }
      };
      apiInstance.convertDocumentOdsToPdf(Buffer.from(inputFile.buffer), callback);


    return aprURL + `/APR${dataApr.number}.ods`
}
