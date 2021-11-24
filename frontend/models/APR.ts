interface Risk {
    id: number,
    name: string,
    acidente: string
    protecao: Array<string>
}

interface EPIs {
    id: number,
    name: string
}

export interface APR {
    id?: string,
    number?: number
    date: string,
    local: string,
    equip: string,
    description: string,
    epis: Array<EPIs>,
    risks: Array<Risk>
}