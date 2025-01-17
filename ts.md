## Typescript Project File Structure

index.ts and tsconfig.json file should be in same directory

index.ts file is the source file containing source code

tsconfig.json file the ts configuration file specifying compiler options, such as target versions, module resolutions, and output locations, for your typescript project.


## Usage
1. Both the files should be in same directory.
2. Open the terminal and navigate to the directory containing index.ts file.
3. run the command *tsc* without any file name with it.
4. your js file will be created. If error is there in ts file, noEmitOnError will prevent creation of js file.