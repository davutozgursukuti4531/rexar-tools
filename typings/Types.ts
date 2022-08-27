type NPMReturns = {
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
    homepage: string
    license: string
}
type YarnReturns = {
    name: string
    version: string
    description: string
    keywords: Array<string>
    createdDate: string
    modifiedDate: string
    repository: {
        url: string | undefined
        type: string | undefined
        directory: string | undefined
    }
    bugs: {
        url: string | undefined
    }
    homepage: string
    author: string | undefined
    license: string
}


export { NPMReturns, YarnReturns }
