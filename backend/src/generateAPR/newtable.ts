import { APR } from '../typagem'

export const newSheet = (dataApr: APR) => {
    const sheets = [];
    for (var prop in dataApr.risks) {
      const newtable = `<table:table table:name="PG_${dataApr.risks[prop].number + 1}" table:style-name="ta1">
      <table:table-column table:style-name="co1" table:number-columns-repeated="4" table:default-cell-style-name="ce1"/>
      <table:table-column table:style-name="co2" table:number-columns-repeated="2" table:default-cell-style-name="ce1"/>
      <table:table-column table:style-name="co3" table:number-columns-repeated="16378" table:default-cell-style-name="ce1"/>
      <table:table-row table:style-name="ro1">
      <table:table-cell table:number-columns-spanned="1" table:number-rows-spanned="4" table:style-name="ce13"/>
      <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="2" table:style-name="ce14">
      <text:p>ANALISE PRELIMINAR DE RISCOS</text:p>
      </table:table-cell>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:table-cell office:value-type="string" table:number-columns-spanned="1" table:number-rows-spanned="2" table:style-name="ce15">
      <text:p>APR Nº</text:p>
      </table:table-cell>
      <table:table-cell office:value-type="float" office:value="${dataApr.id}" table:number-columns-spanned="1" table:number-rows-spanned="2" table:style-name="ce16">
      <text:p>${dataApr.id}</text:p>
      </table:table-cell>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:style-name="ro1">
      <table:covered-table-cell>
      <draw:frame draw:z-index="3" draw:id="id5" draw:style-name="a5" draw:name="Imagem 5" svg:x="0.3125in" svg:y="0.01042in" svg:width="2.29167in" svg:height="1.32657in" style:rel-width="scale" style:rel-height="scale">
      <draw:image xlink:href="media/image1.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
      <svg:title/>
      <svg:desc/>
      </draw:frame>
      </table:covered-table-cell>
      <table:covered-table-cell/>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:covered-table-cell/>
      <table:covered-table-cell/>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:style-name="ro2">
      <table:covered-table-cell/>
      <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="2" table:style-name="ce17"/>
      <table:covered-table-cell>
      <draw:frame draw:z-index="1" draw:id="id3" draw:style-name="a3" draw:name="Imagem 1" svg:x="0.64523in" svg:y="0.17857in" svg:width="1.77788in" svg:height="1.04906in" style:rel-width="scale" style:rel-height="scale">
      <draw:image xlink:href="media/image2.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
      <svg:title/>
      <svg:desc/>
      </draw:frame>
      </table:covered-table-cell>
      <table:covered-table-cell/>
      <table:table-cell office:value-type="string" table:style-name="ce2">
      <text:p>Data Elaboração</text:p>
      </table:table-cell>
      <table:table-cell table:style-name="ce3">
      <text:p>${dataApr.date}</text:p>
      </table:table-cell>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:style-name="ro2">
      <table:covered-table-cell/>
      <table:covered-table-cell/>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:table-cell office:value-type="string" table:style-name="ce4">
      <text:p>Páginas</text:p>
      </table:table-cell>
      <table:table-cell office:value-type="string" table:style-name="ce5">
      <text:p>${dataApr.risks[prop].number + 1} de ${dataApr.risks.length + 5}</text:p>
      </table:table-cell>
      <table:table-cell table:number-columns-repeated="6"/>
      <table:table-cell table:style-name="ce1">
      <draw:frame draw:z-index="2" draw:id="id4" draw:style-name="a4" draw:name="Imagem 2" svg:x="0in" svg:y="0.06534in" svg:width="0in" svg:height="0.74513in" style:rel-width="scale" style:rel-height="scale">
      <draw:image xlink:href="media/image2.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
      <svg:title/>
      <svg:desc/>
      </draw:frame>
      </table:table-cell>
      <table:table-cell table:number-columns-repeated="16371"/>
      </table:table-row>
      <table:table-row table:style-name="ro2">
      <table:table-cell office:value-type="string" table:style-name="ce12">
      <text:p>${dataApr.risks[prop].name}</text:p>
      </table:table-cell>
      <table:table-cell office:value-type="string" table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce22">
      <text:p>${dataApr.risks[prop].acidente}</text:p>
      </table:table-cell>
      <table:covered-table-cell/>
      <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce23">
      <text:p>${dataApr.risks[prop].protecao[0] ? `${dataApr.risks[prop].protecao[0]}` : ''}</text:p>
      </table:table-cell>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:style-name="ro2">
      <table:table-cell table:style-name="ce12"/>
      <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
      <table:covered-table-cell/>
      <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
      <text:p>${dataApr.risks[prop].protecao[1] ? `${dataApr.risks[prop].protecao[1]}` : ''}</text:p>
      </table:table-cell>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:style-name="ro2">
      <table:table-cell table:style-name="ce12"/>
      <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
      <table:covered-table-cell/>
      <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
      <text:p>${dataApr.risks[prop].protecao[2] ? `${dataApr.risks[prop].protecao[2]}` : ''}</text:p>
      </table:table-cell>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:style-name="ro2">
      <table:table-cell table:style-name="ce12"/>
      <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
      <table:covered-table-cell/>
      <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
      <text:p>${dataApr.risks[prop].protecao[3] ? `${dataApr.risks[prop].protecao[3]}` : ''}</text:p>
      </table:table-cell>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:style-name="ro2">
      <table:table-cell office:value-type="string" table:style-name="ce12">
      <text:p>${dataApr.risks[prop].name}</text:p>
      </table:table-cell>
      <table:table-cell office:value-type="string" table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce26">
      <text:p>${dataApr.risks[prop].acidente}</text:p>
      </table:table-cell>
      <table:covered-table-cell/>
      <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
      <text:p>${dataApr.risks[prop].protecao[4] ? `${dataApr.risks[prop].protecao[4]}` : ''}</text:p>
      </table:table-cell>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:style-name="ro2">
      <table:table-cell table:style-name="ce12"/>
      <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
      <table:covered-table-cell/>
      <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
      <text:p>${dataApr.risks[prop].protecao[5] ? `${dataApr.risks[prop].protecao[5]}` : ''}</text:p>
      </table:table-cell>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:style-name="ro2">
      <table:table-cell table:style-name="ce12"/>
      <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
      <table:covered-table-cell/>
      <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
      <text:p>${dataApr.risks[prop].protecao[6] ? `${dataApr.risks[prop].protecao[6]}` : ''}</text:p>
      </table:table-cell>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:style-name="ro2">
      <table:table-cell table:style-name="ce12"/>
      <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
      <table:covered-table-cell/>
      <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
      <text:p>${dataApr.risks[prop].protecao[7] ? `${dataApr.risks[prop].protecao[7]}` : ''}</text:p>
      </table:table-cell>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:style-name="ro2">
      <table:table-cell office:value-type="string" table:style-name="ce12">
      <text:p>${dataApr.risks[prop].name}</text:p>
      </table:table-cell>
      <table:table-cell office:value-type="string" table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce26">
      <text:p>${dataApr.risks[prop].acidente}</text:p>
      </table:table-cell>
      <table:covered-table-cell/>
      <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
      <text:p>${dataApr.risks[prop].protecao[8] ? `${dataApr.risks[prop].protecao[8]}` : ''}</text:p>
      </table:table-cell>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:style-name="ro2">
      <table:table-cell table:style-name="ce12"/>
      <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
      <table:covered-table-cell/>
      <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
      <text:p>${dataApr.risks[prop].protecao[9] ? `${dataApr.risks[prop].protecao[9]}` : ''}</text:p>
      </table:table-cell>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:style-name="ro2">
      <table:table-cell table:style-name="ce12"/>
      <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
      <table:covered-table-cell/>
      <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
      <text:p>${dataApr.risks[prop].protecao[10] ? `${dataApr.risks[prop].protecao[10]}` : ''}</text:p>
      </table:table-cell>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:style-name="ro2">
      <table:table-cell office:value-type="string" table:number-columns-spanned="1" table:number-rows-spanned="3" table:style-name="ce27">
      <text:p>${dataApr.risks[prop].name}</text:p>
      </table:table-cell>
      <table:table-cell office:value-type="string" table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce26">
      <text:p>${dataApr.risks[prop].acidente}</text:p>
      </table:table-cell>
      <table:covered-table-cell/>
      <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
      <text:p>${dataApr.risks[prop].protecao[11] ? `${dataApr.risks[prop].protecao[11]}` : ''}</text:p>
      </table:table-cell>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:style-name="ro2">
      <table:covered-table-cell/>
      <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
      <table:covered-table-cell/>
      <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
      <text:p>${dataApr.risks[prop].protecao[12] ? `${dataApr.risks[prop].protecao[12]}` : ''}</text:p>
      </table:table-cell>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:style-name="ro2">
      <table:covered-table-cell/>
      <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce28"/>
      <table:covered-table-cell/>
      <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce29">
      <text:p>${dataApr.risks[prop].protecao[13] ? `${dataApr.risks[prop].protecao[13]}` : ''}</text:p>
      </table:table-cell>
      <table:covered-table-cell table:number-columns-repeated="2"/>
      <table:table-cell table:number-columns-repeated="16378"/>
      </table:table-row>
      <table:table-row table:number-rows-repeated="1048558" table:style-name="ro3">
      <table:table-cell table:number-columns-repeated="16384"/>
      </table:table-row>
      <table:named-expressions>
      <table:named-range table:name="Print_Area" table:cell-range-address="PG_${dataApr.risks[prop].number + 1}.$A$1:PG_${dataApr.risks[prop].number + 1}.$F$18" table:base-cell-address="PG_${dataApr.risks[prop].number + 1}.$A$1"/>
      </table:named-expressions>
      </table:table>`
      sheets.push(newtable);
    }
  
    return sheets;
  };


  export const finalPlan = (dataApr: APR) => {
    const partsOfAPR = [`<office:document-content xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0" xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0" xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0" xmlns:of="urn:oasis:names:tc:opendocument:xmlns:of:1.2" office:version="1.2">
  <office:font-face-decls>
  <style:font-face style:name="Calibri" svg:font-family="Calibri"/>
  <style:font-face style:name="Verdana" svg:font-family="Verdana"/>
  <style:font-face style:name="Arial" svg:font-family="Arial"/>
  </office:font-face-decls>
  <office:automatic-styles>
  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0"/>
  <style:style style:name="ce2" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="center"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial"/>
  </style:style>
  <style:style style:name="ce3" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N19">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="thin solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="center"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial"/>
  </style:style>
  <style:style style:name="ce4" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="2pt solid #000000" fo:border-left="thin solid #000000" fo:border-right="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="center"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial"/>
  </style:style>
  <style:style style:name="ce5" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="2pt solid #000000" fo:border-left="thin solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="center"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial"/>
  </style:style>
  <style:style style:name="ce6" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="2pt solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="2pt solid #000000" fo:border-right="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce7" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="2pt solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="thin solid #000000" fo:border-right="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial"/>
  </style:style>
  <style:style style:name="ce8" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="2pt solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="thin solid #000000" fo:border-right="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce9" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="2pt solid #000000" fo:border-right="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce10" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="2pt solid #000000" fo:border-right="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="start" fo:margin-left="0cm"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce11" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="2pt solid #000000" fo:border-left="2pt solid #000000" fo:border-right="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="center"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce12" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="none" fo:border-bottom="none" fo:border-left="2pt solid #000000" fo:border-right="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="justify"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="10pt" style:font-size-asian="10pt" style:font-size-complex="10pt" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce13" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="2pt solid #000000" fo:border-bottom="2pt solid #000000" fo:border-left="2pt solid #000000" fo:border-right="thin solid #000000" fo:background-color="transparent"/>
  </style:style>
  <style:style style:name="ce14" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="2pt solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="thin solid #000000" fo:border-right="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="center"/>
  <style:text-properties style:font-name="Verdana" style:font-name-asian="Verdana" style:font-name-complex="Verdana" fo:font-size="20pt" style:font-size-asian="20pt" style:font-size-complex="20pt" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce15" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="2pt solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="thin solid #000000" fo:border-right="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="center"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="14pt" style:font-size-asian="14pt" style:font-size-complex="14pt" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce16" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N1">
  <style:table-cell-properties fo:border-top="2pt solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="thin solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="center"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="14pt" style:font-size-asian="14pt" style:font-size-complex="14pt" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce17" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="2pt solid #000000" fo:border-left="thin solid #000000" fo:border-right="thin solid #000000" fo:background-color="transparent"/>
  </style:style>
  <style:style style:name="ce18" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="2pt solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="thin solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="start" fo:margin-left="0cm"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial"/>
  </style:style>
  <style:style style:name="ce19" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="thin solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="start" fo:margin-left="0cm"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial"/>
  </style:style>
  <style:style style:name="ce20" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="2pt solid #000000" fo:border-left="thin solid #000000" fo:border-right="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="center"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce21" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="2pt solid #000000" fo:border-left="thin solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="center"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce22" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="2pt solid #000000" fo:border-bottom="none" fo:border-left="thin solid #000000" fo:border-right="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="justify"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="10pt" style:font-size-asian="10pt" style:font-size-complex="10pt"/>
  </style:style>
  <style:style style:name="ce23" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="2pt solid #000000" fo:border-bottom="none" fo:border-left="thin solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="top" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="start" fo:margin-left="0cm"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="10pt" style:font-size-asian="10pt" style:font-size-complex="10pt"/>
  </style:style>
  <style:style style:name="ce24" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="none" fo:border-bottom="none" fo:border-left="thin solid #000000" fo:border-right="thin solid #000000" fo:background-color="transparent"/>
  </style:style>
  <style:style style:name="ce25" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="none" fo:border-bottom="none" fo:border-left="thin solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="top" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="start" fo:margin-left="0cm"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="10pt" style:font-size-asian="10pt" style:font-size-complex="10pt"/>
  </style:style>
  <style:style style:name="ce26" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="none" fo:border-bottom="none" fo:border-left="thin solid #000000" fo:border-right="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="justify"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="10pt" style:font-size-asian="10pt" style:font-size-complex="10pt"/>
  </style:style>
  <style:style style:name="ce27" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="none" fo:border-bottom="2pt solid #000000" fo:border-left="2pt solid #000000" fo:border-right="thin solid #000000" style:vertical-align="top" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="start" fo:margin-left="0cm"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="10pt" style:font-size-asian="10pt" style:font-size-complex="10pt" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce28" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="none" fo:border-bottom="2pt solid #000000" fo:border-left="thin solid #000000" fo:border-right="thin solid #000000" fo:background-color="transparent"/>
  </style:style>
  <style:style style:name="ce29" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="none" fo:border-bottom="2pt solid #000000" fo:border-left="thin solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="top" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="start" fo:margin-left="0cm"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="10pt" style:font-size-asian="10pt" style:font-size-complex="10pt"/>
  </style:style>
  <style:style style:name="ce30" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="2pt solid #000000" fo:border-bottom="none" fo:border-left="2pt solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="center"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="14pt" style:font-size-asian="14pt" style:font-size-complex="14pt" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce31" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="2pt solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="top" fo:wrap-option="wrap"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="12pt" style:font-size-asian="12pt" style:font-size-complex="12pt" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce32" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="none" fo:border-bottom="2pt solid #000000" fo:border-left="2pt solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="top" fo:wrap-option="wrap"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="12pt" style:font-size-asian="12pt" style:font-size-complex="12pt" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce33" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="2pt solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="2pt solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="center"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="14pt" style:font-size-asian="14pt" style:font-size-complex="14pt" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce34" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="2pt solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="top" fo:wrap-option="wrap" fo:background-color="transparent"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="12pt" style:font-size-asian="12pt" style:font-size-complex="12pt" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce35" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="2pt solid #000000" fo:border-left="2pt solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="top" fo:wrap-option="wrap" fo:background-color="transparent"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="12pt" style:font-size-asian="12pt" style:font-size-complex="12pt" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce36" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="none" fo:border-left="thin solid #000000" fo:border-right="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="center"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial"/>
  </style:style>
  <style:style style:name="ce37" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="none" fo:border-left="thin solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="center"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial"/>
  </style:style>
  <style:style style:name="ce38" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border="2pt solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="center"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="14pt" style:font-size-asian="14pt" style:font-size-complex="14pt" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce39" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border="2pt solid #000000" style:vertical-align="top" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="start" fo:margin-left="0cm"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial"/>
  </style:style>
  <style:style style:name="ce40" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border="2pt solid #000000" style:vertical-align="top" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="start" fo:margin-left="0cm"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="14pt" style:font-size-asian="14pt" style:font-size-complex="14pt"/>
  </style:style>
  <style:style style:name="ce41" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="2pt solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="thin solid #000000" fo:border-right="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" fo:background-color="transparent"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="18pt" style:font-size-asian="18pt" style:font-size-complex="18pt" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce42" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border="thin solid #000000" style:vertical-align="top" fo:wrap-option="wrap" fo:background-color="transparent"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="14pt" style:font-size-asian="14pt" style:font-size-complex="14pt"/>
  </style:style>
  <style:style style:name="ce43" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="2pt solid #000000" fo:border-left="thin solid #000000" fo:border-right="thin solid #000000" style:vertical-align="top" fo:wrap-option="wrap" fo:background-color="transparent"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="14pt" style:font-size-asian="14pt" style:font-size-complex="14pt"/>
  </style:style>
  <style:style style:name="ce44" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border="2pt solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" fo:background-color="transparent" style:repeat-content="false"/>
  <style:paragraph-properties fo:text-align="start" fo:margin-left="0cm"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="12pt" style:font-size-asian="12pt" style:font-size-complex="12pt" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce45" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="2pt solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="2pt solid #000000" fo:border-right="thin solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" fo:background-color="transparent"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="18pt" style:font-size-asian="18pt" style:font-size-complex="18pt" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce46" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="2pt solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="thin solid #000000" fo:border-right="2pt solid #000000" style:vertical-align="middle" fo:wrap-option="wrap" fo:background-color="transparent"/>
  <style:text-properties style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="18pt" style:font-size-asian="18pt" style:font-size-complex="18pt" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold"/>
  </style:style>
  <style:style style:name="ce47" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="2pt solid #000000" fo:border-right="thin solid #000000" fo:background-color="transparent"/>
  </style:style>
  <style:style style:name="ce48" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="thin solid #000000" fo:border-left="thin solid #000000" fo:border-right="2pt solid #000000" fo:background-color="transparent"/>
  </style:style>
  <style:style style:name="ce49" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="2pt solid #000000" fo:border-left="2pt solid #000000" fo:border-right="thin solid #000000" fo:background-color="transparent"/>
  </style:style>
  <style:style style:name="ce50" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N0">
  <style:table-cell-properties fo:border-top="thin solid #000000" fo:border-bottom="2pt solid #000000" fo:border-left="thin solid #000000" fo:border-right="2pt solid #000000" fo:background-color="transparent"/>
  </style:style>
  <style:style style:name="T1" style:family="text" style:parent-style-name="Default">
  <style:text-properties fo:color="#000000" style:text-line-through-style="none" style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="14pt" style:font-size-asian="14pt" style:font-size-complex="14pt" fo:font-style="normal" style:font-style-asian="normal" style:font-style-complex="normal" style:text-underline-style="none" style:text-underline-type="none" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold" style:text-outline="false" fo:text-shadow="none" style:font-family-generic="swiss"/>
  </style:style>
  <style:style style:name="T2" style:family="text" style:parent-style-name="Default">
  <style:text-properties fo:color="#000000" style:text-line-through-style="none" style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="11pt" style:font-size-asian="11pt" style:font-size-complex="11pt" fo:font-style="normal" style:font-style-asian="normal" style:font-style-complex="normal" style:text-underline-style="none" style:text-underline-type="none" fo:font-weight="normal" style:font-weight-asian="normal" style:font-weight-complex="normal" style:text-outline="false" fo:text-shadow="none" style:font-family-generic="swiss"/>
  </style:style>
  <style:style style:name="T3" style:family="text" style:parent-style-name="Default">
  <style:text-properties fo:color="#000000" style:text-line-through-style="none" style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="11pt" style:font-size-asian="11pt" style:font-size-complex="11pt" fo:font-style="normal" style:font-style-asian="normal" style:font-style-complex="normal" style:text-underline-style="none" style:text-underline-type="none" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold" style:text-outline="false" fo:text-shadow="none" style:font-family-generic="swiss"/>
  </style:style>
  <style:style style:name="T4" style:family="text" style:parent-style-name="Default">
  <style:text-properties fo:color="#00B0F0" style:text-line-through-style="none" style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="11pt" style:font-size-asian="11pt" style:font-size-complex="11pt" fo:font-style="normal" style:font-style-asian="normal" style:font-style-complex="normal" style:text-underline-style="none" style:text-underline-type="none" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold" style:text-outline="false" fo:text-shadow="none" style:font-family-generic="swiss"/>
  </style:style>
  <style:style style:name="T5" style:family="text" style:parent-style-name="Default">
  <style:text-properties fo:color="#FF0000" style:text-line-through-style="none" style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="11pt" style:font-size-asian="11pt" style:font-size-complex="11pt" fo:font-style="normal" style:font-style-asian="normal" style:font-style-complex="normal" style:text-underline-style="none" style:text-underline-type="none" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold" style:text-outline="false" fo:text-shadow="none" style:font-family-generic="swiss"/>
  </style:style>
  <style:style style:name="T6" style:family="text" style:parent-style-name="Default">
  <style:text-properties fo:color="#FFFF00" style:text-line-through-style="none" style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="11pt" style:font-size-asian="11pt" style:font-size-complex="11pt" fo:font-style="normal" style:font-style-asian="normal" style:font-style-complex="normal" style:text-underline-style="none" style:text-underline-type="none" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold" style:text-outline="false" fo:text-shadow="none" style:font-family-generic="swiss"/>
  </style:style>
  <style:style style:name="T7" style:family="text" style:parent-style-name="Default">
  <style:text-properties fo:color="#BFBFBF" style:text-line-through-style="none" style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="11pt" style:font-size-asian="11pt" style:font-size-complex="11pt" fo:font-style="normal" style:font-style-asian="normal" style:font-style-complex="normal" style:text-underline-style="none" style:text-underline-type="none" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold" style:text-outline="false" fo:text-shadow="none" style:font-family-generic="swiss"/>
  </style:style>
  <style:style style:name="T8" style:family="text" style:parent-style-name="Default">
  <style:text-properties fo:color="#70AD47" style:text-line-through-style="none" style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="11pt" style:font-size-asian="11pt" style:font-size-complex="11pt" fo:font-style="normal" style:font-style-asian="normal" style:font-style-complex="normal" style:text-underline-style="none" style:text-underline-type="none" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold" style:text-outline="false" fo:text-shadow="none" style:font-family-generic="swiss"/>
  </style:style>
  <style:style style:name="T9" style:family="text" style:parent-style-name="Default">
  <style:text-properties fo:color="#000000" style:text-line-through-style="none" style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="11pt" style:font-size-asian="11pt" style:font-size-complex="11pt" fo:font-style="italic" style:font-style-asian="italic" style:font-style-complex="italic" style:text-underline-style="solid" style:text-underline-type="single" fo:font-weight="bold" style:font-weight-asian="bold" style:font-weight-complex="bold" style:text-outline="false" fo:text-shadow="none" style:font-family-generic="swiss"/>
  </style:style>
  <style:style style:name="T10" style:family="text" style:parent-style-name="Default">
  <style:text-properties fo:color="#000000" style:text-line-through-style="none" style:font-name="Arial" style:font-name-asian="Arial" style:font-name-complex="Arial" fo:font-size="14pt" style:font-size-asian="14pt" style:font-size-complex="14pt" fo:font-style="normal" style:font-style-asian="normal" style:font-style-complex="normal" style:text-underline-style="none" style:text-underline-type="none" fo:font-weight="normal" style:font-weight-asian="normal" style:font-weight-complex="normal" style:text-outline="false" fo:text-shadow="none" style:font-family-generic="swiss"/>
  </style:style>
  <style:style style:name="co1" style:family="table-column">
  <style:table-column-properties fo:break-before="auto" style:column-width="7.75229166666667cm"/>
  </style:style>
  <style:style style:name="co2" style:family="table-column">
  <style:table-column-properties fo:break-before="auto" style:column-width="3.96875cm"/>
  </style:style>
  <style:style style:name="co3" style:family="table-column">
  <style:table-column-properties fo:break-before="auto" style:column-width="1.69333333333333cm"/>
  </style:style>
  <style:style style:name="ro1" style:family="table-row">
  <style:table-row-properties style:row-height="25.5pt" style:use-optimal-row-height="false" fo:break-before="auto"/>
  </style:style>
  <style:style style:name="ro2" style:family="table-row">
  <style:table-row-properties style:row-height="48.75pt" style:use-optimal-row-height="false" fo:break-before="auto"/>
  </style:style>
  <style:style style:name="ro3" style:family="table-row">
  <style:table-row-properties style:row-height="15pt" style:use-optimal-row-height="true" fo:break-before="auto"/>
  </style:style>
  <style:style style:name="ro4" style:family="table-row">
  <style:table-row-properties style:row-height="35.25pt" style:use-optimal-row-height="false" fo:break-before="auto"/>
  </style:style>
  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
  <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
  </style:style>
  <style:style style:family="graphic" style:name="a10" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="solid" draw:fill-color="#ffffff" draw:opacity="0%" fo:clip="rect(-0.00137in, -0.00136in, -0.00137in, -0.00136in)" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a11" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="none" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a12" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="solid" draw:fill-color="#ffffff" draw:opacity="0%" fo:clip="rect(-0.00137in, -0.00136in, -0.00137in, -0.00136in)" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a13" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="solid" draw:fill-color="#ffffff" draw:opacity="0%" fo:clip="rect(-0.00137in, -0.00136in, -0.00137in, -0.00136in)" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a14" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="none" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a15" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="solid" draw:fill-color="#ffffff" draw:opacity="0%" fo:clip="rect(-0.00137in, -0.00136in, -0.00137in, -0.00136in)" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a16" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="solid" draw:fill-color="#ffffff" draw:opacity="0%" fo:clip="rect(-0.00137in, -0.00136in, -0.00137in, -0.00136in)" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a17" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="none" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a0" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="solid" draw:fill-color="#ffffff" draw:opacity="0%" fo:clip="rect(-0.00137in, -0.00136in, -0.00137in, -0.00136in)" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a1" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="solid" draw:fill-color="#ffffff" draw:opacity="0%" fo:clip="rect(-0.00137in, -0.00136in, -0.00137in, -0.00136in)" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a2" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="none" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a3" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="solid" draw:fill-color="#ffffff" draw:opacity="0%" fo:clip="rect(-0.00137in, -0.00136in, -0.00137in, -0.00136in)" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a4" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="solid" draw:fill-color="#ffffff" draw:opacity="0%" fo:clip="rect(-0.00137in, -0.00136in, -0.00137in, -0.00136in)" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a5" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="none" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a6" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="solid" draw:fill-color="#ffffff" draw:opacity="0%" fo:clip="rect(-0.00137in, -0.00136in, -0.00137in, -0.00136in)" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a7" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="solid" draw:fill-color="#ffffff" draw:opacity="0%" fo:clip="rect(-0.00137in, -0.00136in, -0.00137in, -0.00136in)" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a8" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="none" draw:stroke="none"/>
  </style:style>
  <style:style style:family="graphic" style:name="a9" style:parent-style-name="Graphics">
  <style:graphic-properties draw:fill="solid" draw:fill-color="#ffffff" draw:opacity="0%" fo:clip="rect(-0.00137in, -0.00136in, -0.00137in, -0.00136in)" draw:stroke="none"/>
  </style:style>
  </office:automatic-styles>
  <office:body>
  <office:spreadsheet>
  <table:calculation-settings table:case-sensitive="false" table:search-criteria-must-apply-to-whole-cell="true" table:use-wildcards="true" table:use-regular-expressions="false" table:automatic-find-labels="false"/>
  <table:table table:name="PG1" table:style-name="ta1">
  <table:table-column table:style-name="co1" table:number-columns-repeated="4" table:default-cell-style-name="ce1"/>
  <table:table-column table:style-name="co2" table:number-columns-repeated="2" table:default-cell-style-name="ce1"/>
  <table:table-column table:style-name="co3" table:number-columns-repeated="16378" table:default-cell-style-name="ce1"/>
  <table:table-row table:style-name="ro1">
  <table:table-cell table:number-columns-spanned="1" table:number-rows-spanned="4" table:style-name="ce13"/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="2" table:style-name="ce14">
  <text:p>ANALISE PRELIMINAR DE RISCOS</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="1" table:number-rows-spanned="2" table:style-name="ce15">
  <text:p>APR Nº</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="float" office:value="${dataApr.id}" table:number-columns-spanned="1" table:number-rows-spanned="2" table:style-name="ce16">
  <text:p>${dataApr.id}</text:p>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro1">
  <table:covered-table-cell>
  <draw:frame draw:z-index="3" draw:id="id2" draw:style-name="a2" draw:name="Imagem 5" svg:x="0.3125in" svg:y="0.01042in" svg:width="2.29167in" svg:height="1.32657in" style:rel-width="scale" style:rel-height="scale">
  <draw:image xlink:href="media/image1.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
  <svg:title/>
  <svg:desc/>
  </draw:frame>
  </table:covered-table-cell>
  <table:covered-table-cell/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:covered-table-cell/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="2" table:style-name="ce17"/>
  <table:covered-table-cell>
  <draw:frame draw:z-index="1" draw:id="id0" draw:style-name="a0" draw:name="Imagem 2" svg:x="0.64523in" svg:y="0.17857in" svg:width="1.77788in" svg:height="1.04906in" style:rel-width="scale" style:rel-height="scale">
  <draw:image xlink:href="media/image2.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
  <svg:title/>
  <svg:desc/>
  </draw:frame>
  </table:covered-table-cell>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:style-name="ce2">
  <text:p>Data Elaboração</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="date" office:date-value="${dataApr.date}T00:00:00" table:style-name="ce3">
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:covered-table-cell/>
  <table:covered-table-cell/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell office:value-type="string" table:style-name="ce4">
  <text:p>Páginas</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:style-name="ce5">
  <text:p>1 de ${dataApr.risks.length + 5}</text:p>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="6"/>
  <table:table-cell table:style-name="ce1">
  <draw:frame draw:z-index="2" draw:id="id1" draw:style-name="a1" draw:name="Imagem 3" svg:x="0in" svg:y="0.06534in" svg:width="0in" svg:height="0.74513in" style:rel-width="scale" style:rel-height="scale">
  <draw:image xlink:href="media/image2.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
  <svg:title/>
  <svg:desc/>
  </draw:frame>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="16371"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:style-name="ce6">
  <text:p>
  1. LOCAL DO TRABALHO:
  <text:s/>
  </text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:style-name="ce7">
  <text:p>${dataApr.local}</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:style-name="ce8">
  <text:p>2. EQUIPAMENTO/LINHA:</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce18">
  <text:p>${dataApr.equip}</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:style-name="ce9">
  <text:p>
  3. DESCRIÇÃO DO TRABALHO QUE SERÁ REALIZADO:
  <text:s/>
  </text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:number-columns-spanned="5" table:number-rows-spanned="1" table:style-name="ce19">
  <text:p>${dataApr.description}</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="4"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:style-name="ce10">
  <text:p>
  4. EQUIPAMENTO DE PROTEÇÃO INDIVIDUAL / COLETIVOS RECOMENDADOS:
  <text:s/>
  </text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:number-columns-spanned="5" table:number-rows-spanned="1" table:style-name="ce19">
  <text:p>${dataApr.epis}</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="4"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:style-name="ce11">
  <text:p>5. SEQUÊNCIA DAS ETAPAS DE TRABALHO</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce20">
  <text:p>6. POTENCIAL DE ACIDENTES OU PERDAS</text:p>
  </table:table-cell>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce21">
  <text:p>7. PROCEDIMENTOS DE SEGURANÇA RECOMENDADOS</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:style-name="ce12">
  <text:p>ETAPE 1</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce22">
  <text:p>RISK 1</text:p>
  </table:table-cell>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce23">
  <text:p>SECURITY 1</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell table:style-name="ce12"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 2</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell table:style-name="ce12"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 3</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:style-name="ce12">
  <text:p>ETAPE 2</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce26">
  <text:p>RISK 2</text:p>
  </table:table-cell>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 4</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell table:style-name="ce12"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 5</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell table:style-name="ce12"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 6</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell table:style-name="ce12"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 7</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:number-columns-spanned="1" table:number-rows-spanned="3" table:style-name="ce27">
  <text:p>ETAPE 3</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce26">
  <text:p>RISK 3</text:p>
  </table:table-cell>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 8</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 9</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce28"/>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce29">
  <text:p>SECURITY 10</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:number-rows-repeated="1048558" table:style-name="ro3">
  <table:table-cell table:number-columns-repeated="16384"/>
  </table:table-row>
  <table:named-expressions>
  <table:named-range table:name="Print_Area" table:cell-range-address="PG1.$A$1:PG1.$F$18" table:base-cell-address="PG1.$A$1"/>
  </table:named-expressions>
  </table:table>`,`<table:table table:name="PG_F_1" table:style-name="ta1">
  <table:table-column table:style-name="co1" table:number-columns-repeated="4" table:default-cell-style-name="ce1"/>
  <table:table-column table:style-name="co2" table:number-columns-repeated="2" table:default-cell-style-name="ce1"/>
  <table:table-column table:style-name="co3" table:number-columns-repeated="16378" table:default-cell-style-name="ce1"/>
  <table:table-row table:style-name="ro1">
  <table:table-cell table:number-columns-spanned="1" table:number-rows-spanned="4" table:style-name="ce13"/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="2" table:style-name="ce14">
  <text:p>ANALISE PRELIMINAR DE RISCOS</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="1" table:number-rows-spanned="2" table:style-name="ce15">
  <text:p>APR Nº</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="float" office:value="${dataApr.id}" table:number-columns-spanned="1" table:number-rows-spanned="2" table:style-name="ce16">
  <text:p>${dataApr.id}</text:p>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro1">
  <table:covered-table-cell>
  <draw:frame draw:z-index="3" draw:id="id8" draw:style-name="a8" draw:name="Imagem 5" svg:x="0.3125in" svg:y="0.01042in" svg:width="2.29167in" svg:height="1.32657in" style:rel-width="scale" style:rel-height="scale">
  <draw:image xlink:href="media/image1.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
  <svg:title/>
  <svg:desc/>
  </draw:frame>
  </table:covered-table-cell>
  <table:covered-table-cell/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:covered-table-cell/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="2" table:style-name="ce17"/>
  <table:covered-table-cell>
  <draw:frame draw:z-index="1" draw:id="id6" draw:style-name="a6" draw:name="Imagem 1" svg:x="0.64523in" svg:y="0.17857in" svg:width="1.77788in" svg:height="1.04906in" style:rel-width="scale" style:rel-height="scale">
  <draw:image xlink:href="media/image2.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
  <svg:title/>
  <svg:desc/>
  </draw:frame>
  </table:covered-table-cell>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:style-name="ce2">
  <text:p>Data Elaboração</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="date" office:date-value="${dataApr.date}T00:00:00" table:style-name="ce3">
  <text:p>${dataApr.date}</text:p>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:covered-table-cell/>
  <table:covered-table-cell/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell office:value-type="string" table:style-name="ce4">
  <text:p>Páginas</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:style-name="ce5">
  <text:p>${dataApr.risks.length + 2} de ${dataApr.risks.length + 5}</text:p>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="6"/>
  <table:table-cell table:style-name="ce1">
  <draw:frame draw:z-index="2" draw:id="id7" draw:style-name="a7" draw:name="Imagem 2" svg:x="0in" svg:y="0.06534in" svg:width="0in" svg:height="0.74513in" style:rel-width="scale" style:rel-height="scale">
  <draw:image xlink:href="media/image2.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
  <svg:title/>
  <svg:desc/>
  </draw:frame>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="16371"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:style-name="ce12">
  <text:p>ETAPE 1</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce22">
  <text:p>RISK 1</text:p>
  </table:table-cell>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce23">
  <text:p>Evitar esforço cortes de peças/chapas somente em bancadas, caso dentro do cenário de Trabalho estiver com espaço restrito para movimentação verificar junto com planejamento e segurança do trabalho a melhor forma e equipamento para executar atividade, realizar intervalos de descanso a cada 1 hora trabalhada descansar 15 minutos.</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell table:style-name="ce12"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 2</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell table:style-name="ce12"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 3</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell table:style-name="ce12"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 4</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:style-name="ce12">
  <text:p>ETAPE 2</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce26">
  <text:p>RISK 2</text:p>
  </table:table-cell>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 5</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell table:style-name="ce12"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 6</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell table:style-name="ce12"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 7</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell table:style-name="ce12"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 8</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:style-name="ce12">
  <text:p>ETAPE 3</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce26">
  <text:p>RISK 3</text:p>
  </table:table-cell>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 9</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell table:style-name="ce12"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce24"/>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce25">
  <text:p>SECURITY 10</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell table:style-name="ce12"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce28"/>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce29">
  <text:p>SECURITY 11</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:style-name="ce30">
  <text:p>8. CONTRATANTE</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:style-name="ce30">
  <text:p>9. CONTRATADA / EXECUTANTE</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:style-name="ce30">
  <text:p>10. ÁREA DE TRABALHO</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:style-name="ce30">
  <text:p>11. SESMT PROVEDOR</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce33">
  <text:p>12. SESMT APROVAÇÃO / SUZANO</text:p>
  </table:table-cell>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:style-name="ce31">
  <text:p>NOME:</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:style-name="ce31">
  <text:p>NOME:</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:style-name="ce31">
  <text:p>NOME:</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:style-name="ce31">
  <text:p>NOME:</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce34">
  <text:p>NOME:</text:p>
  </table:table-cell>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:style-name="ce32">
  <text:p>
  DATA:
  <text:s text:c="22"/>
  VISTO:
  </text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:style-name="ce32">
  <text:p>
  DATA:
  <text:s text:c="22"/>
  VISTO:
  </text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:style-name="ce32">
  <text:p>
  DATA:
  <text:s text:c="22"/>
  VISTO:
  </text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:style-name="ce32">
  <text:p>
  DATA:
  <text:s text:c="22"/>
  VISTO:
  </text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce35">
  <text:p>
  DATA:
  <text:s text:c="22"/>
  VISTO:
  </text:p>
  </table:table-cell>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:number-rows-repeated="1048558" table:style-name="ro3">
  <table:table-cell table:number-columns-repeated="16384"/>
  </table:table-row>
  <table:named-expressions>
  <table:named-range table:name="Print_Area" table:cell-range-address="PG_F_1.$A$1:PG_F_1.$F$18" table:base-cell-address="PG_F_1.$A$1"/>
  </table:named-expressions>
  </table:table>
  <table:table table:name="PG_F_2" table:style-name="ta1">
  <table:table-column table:style-name="co1" table:number-columns-repeated="4" table:default-cell-style-name="ce1"/>
  <table:table-column table:style-name="co2" table:number-columns-repeated="2" table:default-cell-style-name="ce1"/>
  <table:table-column table:style-name="co3" table:number-columns-repeated="16378" table:default-cell-style-name="ce1"/>
  <table:table-row table:style-name="ro1">
  <table:table-cell table:number-columns-spanned="1" table:number-rows-spanned="4" table:style-name="ce13"/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="2" table:style-name="ce14">
  <text:p>ANALISE PRELIMINAR DE RISCOS</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="1" table:number-rows-spanned="2" table:style-name="ce15">
  <text:p>APR Nº</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="float" office:value="${dataApr.id}" table:number-columns-spanned="1" table:number-rows-spanned="2" table:style-name="ce16">
  <text:p>${dataApr.id}</text:p>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro1">
  <table:covered-table-cell>
  <draw:frame draw:z-index="3" draw:id="id11" draw:style-name="a11" draw:name="Imagem 5" svg:x="0.3125in" svg:y="0.01042in" svg:width="2.29167in" svg:height="1.32657in" style:rel-width="scale" style:rel-height="scale">
  <draw:image xlink:href="media/image1.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
  <svg:title/>
  <svg:desc/>
  </draw:frame>
  </table:covered-table-cell>
  <table:covered-table-cell/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:covered-table-cell/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="2" table:style-name="ce17"/>
  <table:covered-table-cell>
  <draw:frame draw:z-index="1" draw:id="id9" draw:style-name="a9" draw:name="Imagem 1" svg:x="0.64523in" svg:y="0.17857in" svg:width="1.77788in" svg:height="1.04906in" style:rel-width="scale" style:rel-height="scale">
  <draw:image xlink:href="media/image2.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
  <svg:title/>
  <svg:desc/>
  </draw:frame>
  </table:covered-table-cell>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:style-name="ce2">
  <text:p>Data Elaboração</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="date" office:date-value="${dataApr.date}T00:00:00" table:style-name="ce3">
  <text:p>${dataApr.date}</text:p>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:covered-table-cell/>
  <table:covered-table-cell/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell office:value-type="string" table:style-name="ce36">
  <text:p>Páginas</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:style-name="ce37">
  <text:p>${dataApr.risks.length + 3} de ${dataApr.risks.length + 5}</text:p>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="6"/>
  <table:table-cell table:style-name="ce1">
  <draw:frame draw:z-index="2" draw:id="id10" draw:style-name="a10" draw:name="Imagem 2" svg:x="0in" svg:y="0.06534in" svg:width="0in" svg:height="0.74513in" style:rel-width="scale" style:rel-height="scale">
  <draw:image xlink:href="media/image2.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
  <svg:title/>
  <svg:desc/>
  </draw:frame>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="16371"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:number-columns-spanned="6" table:number-rows-spanned="1" table:style-name="ce38">
  <text:p>14. CONSIDERAÇÕES / RECOMENDAÇÕES GERAIS</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="5"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:number-columns-spanned="6" table:number-rows-spanned="13" table:style-name="ce39">
  <text:p>1 – Providenciar L.T. e, somente iniciar o trabalho após liberação da L.T. assinada pelos responsáveis da área e pelos colaboradores responsáveis pela execução do trabalho e havendo trabalho a quente solicitar a liberação do bombeiro.</text:p>
  <text:p/>
  <text:p>2 – Todos os colaboradores que irão executar os trabalhos deverão assinar esta APR e estar ciente dos trabalhos a serem executados. Manter no local de trabalho a APR e a LT devidamente assinada e aprovada por todos envolvidos no trabalho.</text:p>
  <text:p/>
  <text:p>3 – Reunir a equipe, planejar e orientar sobre as etapas de trabalho, os procedimentos de segurança para que o trabalho seja concluído sem nenhum dano físico e material.</text:p>
  <text:p/>
  <text:p>4 – Não permitir a permanência de pessoas não envolvidas nas atividades no local de trabalho.</text:p>
  <text:p/>
  <text:p>5 – Todo conteúdo desta APR devera ser divulgado a todos os colaboradores envolvidos no trabalho, esta divulgação deverá ser feita pelo encarregado responsável pela frente de trabalho.</text:p>
  <text:p/>
  <text:p>6 – A falta do cumprimento das exigências contidas nesta APR por qualquer colaborador envolvido no trabalho será responsabilidade do encarregado da frente de trabalho.</text:p>
  <text:p/>
  <text:p>7 – Antes de executar o trabalho fazer uma auto-análise, havendo duvidas pare e comunique ao Chefe de turma ou responsável.</text:p>
  <text:p/>
  <text:p>8 – Não trabalhar com iluminação inadequada, necessitando de alguma iluminação solicitar a um profissional devidamente qualificado.</text:p>
  <text:p/>
  <text:p>9 – Efetuar teste com detector de tensão e multi testes onde for preciso.</text:p>
  <text:p/>
  <text:p>10 – Não deixar de aterrar os equipamentos para efetuar manutenção.</text:p>
  <text:p/>
  <text:p>
  11 – Os funcionários devem atender o procedimento. É proibido fumar nas frentes de trabalho.
  <text:s/>
  </text:p>
  <text:p/>
  <text:p>12 – Durante as atividades, todos os funcionários devem manter a limpeza e organização da área atendendo os padrões da coleta seletiva.</text:p>
  <text:p>
  <text:span text:style-name="T4">AZUL</text:span>
  <text:s/>
  – Papel /
  <text:s/>
  <text:span text:style-name="T5">VERMELHO</text:span>
  <text:s/>
  – Plástico /
  <text:s/>
  <text:span text:style-name="T6">AMARELO</text:span>
  <text:s/>
  – Metal /
  <text:s/>
  <text:span text:style-name="T7">CINZA</text:span>
  <text:s/>
  – Lixo comum
  </text:p>
  <text:p/>
  <text:p>13 – Em caso de emergência, acionar o Bombeiro através do ramal 03 ou canal 01 segurança / bombeiro:</text:p>
  <text:p/>
  <text:p>
  <text:span text:style-name="T8">Código Verde</text:span>
  : acidente com vítima
  </text:p>
  <text:p>
  <text:span text:style-name="T6">Código amarelo:</text:span>
  <text:s/>
  acidente de produto químico
  </text:p>
  <text:p>
  <text:span text:style-name="T5">Código Vermelho:</text:span>
  <text:s/>
  principio de incêndio
  </text:p>
  <text:p/>
  <text:p>
  <text:span text:style-name="T9">Alarmes de Emergência:</text:span>
  <text:span text:style-name="T9"/>
  </text:p>
  <text:p/>
  <text:p>
  <text:span text:style-name="T3">Intermitente</text:span>
  <text:s/>
  - - - - -
  <text:s/>
  – atenção, mantenha-se no local e calmo;
  </text:p>
  <text:p/>
  <text:p>
  <text:span text:style-name="T3">Contínuo</text:span>
  <text:s text:c="2"/>
  _______ abandone a área, saia até um ponto de encontro mais próximo utilizando as rotas de fuga utilizadas pela brigada de emergência;
  </text:p>
  <text:p/>
  <text:p>
  <text:span text:style-name="T3">Sirenes Pneumáticas Contínuas</text:span>
  <text:s/>
  – evacuação total da fábrica, dirija-se ao Ponto de Encontro da portaria 2 ou 4. Siga as orientações da Brigada de Emergência.
  </text:p>
  <text:p/>
  <text:p>14 – Verificar com o responsável da área as possíveis interferências no local de trabalho e comunicar a operação quando houver qualquer anormalidade no local de trabalho (transbordo, vazamentos, rompimento de tubulações, principio de incêndio, etc.).</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="5"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:number-rows-repeated="12" table:style-name="ro2">
  <table:covered-table-cell/>
  <table:covered-table-cell table:number-columns-repeated="5"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:number-rows-repeated="1048558" table:style-name="ro3">
  <table:table-cell table:number-columns-repeated="16384"/>
  </table:table-row>
  <table:named-expressions>
  <table:named-range table:name="Print_Area" table:cell-range-address="PG_F_2.$A$1:PG_F_2.$F$18" table:base-cell-address="PG_F_2.$A$1"/>
  </table:named-expressions>
  </table:table>
  <table:table table:name="PG_F_3" table:style-name="ta1">
  <table:table-column table:style-name="co1" table:number-columns-repeated="4" table:default-cell-style-name="ce1"/>
  <table:table-column table:style-name="co2" table:number-columns-repeated="2" table:default-cell-style-name="ce1"/>
  <table:table-column table:style-name="co3" table:number-columns-repeated="16378" table:default-cell-style-name="ce1"/>
  <table:table-row table:style-name="ro1">
  <table:table-cell table:number-columns-spanned="1" table:number-rows-spanned="4" table:style-name="ce13"/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="2" table:style-name="ce14">
  <text:p>ANALISE PRELIMINAR DE RISCOS</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="1" table:number-rows-spanned="2" table:style-name="ce15">
  <text:p>APR Nº</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="float" office:value="${dataApr.id}" table:number-columns-spanned="1" table:number-rows-spanned="2" table:style-name="ce16">
  <text:p>${dataApr.id}</text:p>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro1">
  <table:covered-table-cell>
  <draw:frame draw:z-index="3" draw:id="id14" draw:style-name="a14" draw:name="Imagem 5" svg:x="0.3125in" svg:y="0.01042in" svg:width="2.29167in" svg:height="1.32657in" style:rel-width="scale" style:rel-height="scale">
  <draw:image xlink:href="media/image1.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
  <svg:title/>
  <svg:desc/>
  </draw:frame>
  </table:covered-table-cell>
  <table:covered-table-cell/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:covered-table-cell/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="2" table:style-name="ce17"/>
  <table:covered-table-cell>
  <draw:frame draw:z-index="1" draw:id="id12" draw:style-name="a12" draw:name="Imagem 1" svg:x="0.64523in" svg:y="0.17857in" svg:width="1.77788in" svg:height="1.04906in" style:rel-width="scale" style:rel-height="scale">
  <draw:image xlink:href="media/image2.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
  <svg:title/>
  <svg:desc/>
  </draw:frame>
  </table:covered-table-cell>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:style-name="ce2">
  <text:p>Data Elaboração</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="date" office:date-value="${dataApr.date}T00:00:00" table:style-name="ce3">
  <text:p>${dataApr.date}</text:p>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:covered-table-cell/>
  <table:covered-table-cell/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell office:value-type="string" table:style-name="ce36">
  <text:p>Páginas</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:style-name="ce37">
  <text:p>${dataApr.risks.length + 4} de ${dataApr.risks.length + 5}</text:p>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="6"/>
  <table:table-cell table:style-name="ce1">
  <draw:frame draw:z-index="2" draw:id="id13" draw:style-name="a13" draw:name="Imagem 2" svg:x="0in" svg:y="0.06534in" svg:width="0in" svg:height="0.74513in" style:rel-width="scale" style:rel-height="scale">
  <draw:image xlink:href="media/image2.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
  <svg:title/>
  <svg:desc/>
  </draw:frame>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="16371"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:number-columns-spanned="6" table:number-rows-spanned="1" table:style-name="ce38">
  <text:p>
  RECOMENDAÇÕES GERAIS
  <text:s text:c="2"/>
  </text:p>
  <text:p>CONHEÇA OS RISCO E AS REGRAS COMPORTAMENTAIS DA LINHA MESTRA SUZANO</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="5"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:number-columns-spanned="6" table:number-rows-spanned="13" table:style-name="ce40">
  <text:p/>
  <text:p>
  <text:span text:style-name="T1">Bloqueio de Equipamentos</text:span>
  <text:s/>
  <text:span text:style-name="T1"/>
  </text:p>
  <text:p>
  Realizar bloqueio de todas as fontes de energia (hidráulica, mecânica, elétrica e pressurização) na execução do serviço.
  <text:s/>
  </text:p>
  <text:p/>
  <text:p>
  <text:span text:style-name="T1">Trabalho em altura</text:span>
  <text:span text:style-name="T1"/>
  </text:p>
  <text:p>
  Trabalhar em altura utilizando todos os dispositivos de segurança adequados.
  <text:s text:c="2"/>
  </text:p>
  <text:p/>
  <text:p>
  <text:span text:style-name="T1">
  Manuseio de carga suspensa
  <text:s/>
  </text:span>
  <text:span text:style-name="T1"/>
  </text:p>
  <text:p>
  Os operadores das máquinas de guindar devem ser certificados, autorizados e habilitados. Os profissionais devem zelar para que não haja trânsito de pessoas sob cargas suspensas.
  <text:s/>
  </text:p>
  <text:p/>
  <text:p>
  <text:span text:style-name="T1">
  Álcool e drogas
  <text:s/>
  </text:span>
  <text:span text:style-name="T1"/>
  </text:p>
  <text:p>
  Dirigir-se ao trabalho sem influência ou posse de drogas ilegais ou álcool.
  <text:s/>
  </text:p>
  <text:p/>
  <text:p>
  <text:span text:style-name="T1">
  Substâncias químicas perigosas
  <text:s/>
  </text:span>
  <text:span text:style-name="T1"/>
  </text:p>
  <text:p>
  Trabalhar com substâncias químicas perigosas, com adequada proteção para evitar o contato.
  <text:s/>
  </text:p>
  <text:p/>
  <text:p>
  <text:span text:style-name="T1">Acesso a espaço restrito</text:span>
  <text:s/>
  <text:span text:style-name="T1"/>
  </text:p>
  <text:p>
  Permitido acesso somente de profissionais autorizados nos locais caracterizados como restritos: salas elétricas, subestações elétricas e espaços confinados.
  <text:s/>
  </text:p>
  <text:p/>
  <text:p>
  <text:span text:style-name="T1">
  Dispositivo de segurança
  <text:s/>
  </text:span>
  <text:span text:style-name="T1"/>
  </text:p>
  <text:p>
  É vedada a intervenção em máquinas e equipamentos em movimento ou tornar o dispositivo de segurança inoperante.
  <text:s/>
  </text:p>
  <text:p/>
  <text:p>
  <text:span text:style-name="T1">Liberação de Trabalho</text:span>
  <text:span text:style-name="T1"/>
  </text:p>
  <text:p>
  Executar atividades de alto potencial de risco ou não rotineiras com a devida LT – Liberação de Trabalho.
  <text:s/>
  </text:p>
  <text:p/>
  <text:p>
  <text:span text:style-name="T1">Proibido Colocar as mãos em máquinas em Movimento</text:span>
  <text:span text:style-name="T1"/>
  </text:p>
  <text:p>Proibido a intervenção em máquinas em movimento; atentar-se para qualquer parte do corpo que possa ter contato com as máquinas e ser passível de acidentes.</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="5"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:number-rows-repeated="12" table:style-name="ro2">
  <table:covered-table-cell/>
  <table:covered-table-cell table:number-columns-repeated="5"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:number-rows-repeated="1048558" table:style-name="ro3">
  <table:table-cell table:number-columns-repeated="16384"/>
  </table:table-row>
  <table:named-expressions>
  <table:named-range table:name="Print_Area" table:cell-range-address="PG_F_3.$A$1:PG_F_3.$F$18" table:base-cell-address="PG_F_3.$A$1"/>
  </table:named-expressions>
  </table:table>
  <table:table table:name="PG_F_4" table:style-name="ta1">
  <table:table-column table:style-name="co1" table:number-columns-repeated="4" table:default-cell-style-name="ce1"/>
  <table:table-column table:style-name="co2" table:number-columns-repeated="2" table:default-cell-style-name="ce1"/>
  <table:table-column table:style-name="co3" table:number-columns-repeated="16378" table:default-cell-style-name="ce1"/>
  <table:table-row table:style-name="ro1">
  <table:table-cell table:number-columns-spanned="1" table:number-rows-spanned="4" table:style-name="ce13"/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="2" table:style-name="ce14">
  <text:p>ANALISE PRELIMINAR DE RISCOS</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell office:value-type="string" table:number-columns-spanned="1" table:number-rows-spanned="2" table:style-name="ce15">
  <text:p>APR Nº</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="float" office:value="${dataApr.id}" table:number-columns-spanned="1" table:number-rows-spanned="2" table:style-name="ce16">
  <text:p>${dataApr.id}</text:p>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro1">
  <table:covered-table-cell>
  <draw:frame draw:z-index="3" draw:id="id17" draw:style-name="a17" draw:name="Imagem 5" svg:x="0.3125in" svg:y="0.01042in" svg:width="2.29167in" svg:height="1.32657in" style:rel-width="scale" style:rel-height="scale">
  <draw:image xlink:href="media/image1.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
  <svg:title/>
  <svg:desc/>
  </draw:frame>
  </table:covered-table-cell>
  <table:covered-table-cell/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:covered-table-cell/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="2" table:style-name="ce17"/>
  <table:covered-table-cell>
  <draw:frame draw:z-index="1" draw:id="id15" draw:style-name="a15" draw:name="Imagem 1" svg:x="0.64523in" svg:y="0.17857in" svg:width="1.77788in" svg:height="1.04906in" style:rel-width="scale" style:rel-height="scale">
  <draw:image xlink:href="media/image2.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
  <svg:title/>
  <svg:desc/>
  </draw:frame>
  </table:covered-table-cell>
  <table:covered-table-cell/>
  <table:table-cell office:value-type="string" table:style-name="ce2">
  <text:p>Data Elaboração</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="date" office:date-value="${dataApr.date}T00:00:00" table:style-name="ce3">
  <text:p>${dataApr.date}</text:p>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:covered-table-cell/>
  <table:covered-table-cell/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell office:value-type="string" table:style-name="ce36">
  <text:p>Páginas</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:style-name="ce37">
  <text:p>${dataApr.risks.length + 5} de ${dataApr.risks.length + 5}</text:p>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="6"/>
  <table:table-cell table:style-name="ce1">
  <draw:frame draw:z-index="2" draw:id="id16" draw:style-name="a16" draw:name="Imagem 2" svg:x="0in" svg:y="0.06534in" svg:width="0in" svg:height="0.74513in" style:rel-width="scale" style:rel-height="scale">
  <draw:image xlink:href="media/image2.png" xlink:type="simple" xlink:show="embed" xlink:actuate="onLoad"/>
  <svg:title/>
  <svg:desc/>
  </draw:frame>
  </table:table-cell>
  <table:table-cell table:number-columns-repeated="16371"/>
  </table:table-row>
  <table:table-row table:style-name="ro2">
  <table:table-cell office:value-type="string" table:number-columns-spanned="6" table:number-rows-spanned="1" table:style-name="ce44">
  <text:p>Declaro para os devidos fins direitos, que estou ciente dos procedimentos e normas de segurança contidas nesta APR-Análise Preliminar de Riscos e que colocarei em prática nas execuções dos serviços, para assim salvaguardar minha saúde e integridade física, bem como também das pessoas que comigo estejam trabalhando</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="5"/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell office:value-type="string" table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce45">
  <text:p>NOME</text:p>
  </table:table-cell>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell office:value-type="string" table:style-name="ce41">
  <text:p>FUNÇÃO</text:p>
  </table:table-cell>
  <table:table-cell office:value-type="string" table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce46">
  <text:p>ASSINATURA</text:p>
  </table:table-cell>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce47"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce42"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce48"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce47"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce42"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce48"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce47"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce42"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce48"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce47"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce42"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce48"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce47"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce42"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce48"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce47"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce42"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce48"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce47"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce42"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce48"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce47"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce42"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce48"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce47"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce42"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce48"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce47"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce42"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce48"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce47"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce42"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce48"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce47"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce42"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce48"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce47"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce42"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce48"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce47"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce42"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce48"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce47"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce42"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce48"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce47"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce42"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce48"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:style-name="ro4">
  <table:table-cell table:number-columns-spanned="3" table:number-rows-spanned="1" table:style-name="ce49"/>
  <table:covered-table-cell table:number-columns-repeated="2"/>
  <table:table-cell table:style-name="ce43"/>
  <table:table-cell table:number-columns-spanned="2" table:number-rows-spanned="1" table:style-name="ce50"/>
  <table:covered-table-cell/>
  <table:table-cell table:number-columns-repeated="16378"/>
  </table:table-row>
  <table:table-row table:number-rows-repeated="1048553" table:style-name="ro3">
  <table:table-cell table:number-columns-repeated="16384"/>
  </table:table-row>
  <table:named-expressions>
  <table:named-range table:name="Print_Area" table:cell-range-address="PG_F_4.$A$1:PG_F_4.$F$23" table:base-cell-address="PG_F_4.$A$1"/>
  </table:named-expressions>
  </table:table>
  </office:spreadsheet>
  </office:body>
  </office:document-content>`]
    return partsOfAPR
  }