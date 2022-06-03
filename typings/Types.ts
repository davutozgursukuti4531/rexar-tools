interface NPMReturns {
    name: string
    version: string
    description: string
    keywords: Array<string>
    createdDate: string
    modifiedDate: string
    repository: {
        url: string
        type: string
        directory: string
    }
    bugs: {
        url: string
    }
    author: string
    license: string
}


export { NPMReturns }