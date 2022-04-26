import cracoBabelLoader from "craco-babel-loader"
import path from "path"
import fs from "fs"

const appDir = fs.realpathSync(process.cwd())
const resolvePackage = (relativePath: string) => path.resolve(appDir, relativePath)

const cracoConfig = {
    plugins: [
        {
            plugin: cracoBabelLoader,
            options: {
                includes: [
                    resolvePackage("node_modules/roll-js-contracts")
                ]
            }
        }
    ]
}

export default cracoConfig