export const isElectron = import.meta.env.MODE === 'electron'
export const isVSCode = location.protocol === 'vscode-webview:'
export const isLocalMode = false

export const basePath = '/bb/'
export const staticPath = '/bb/'
