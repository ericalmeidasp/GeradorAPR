export interface Risk {
    id?: number,
    number: number,
    name: string,
    acidente: string
    protecao: string
}


export interface APR {
    id?: string,
    number?: number
    date?: string,
    local: string,
    equip: string,
    description: string,
    epis: string,
    risks?: Array<Risk>
}