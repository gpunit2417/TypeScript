## Typescript Project File Structure

index.ts and tsconfig.json file should be in same directory

index.ts file is the source file containing source code

tsconfig.json file the ts configuration file specifying compiler options, such as target versions, module resolutions, and output locations, for your typescript project.


## Usage
1. Both the files should be in same directory.
2. Open the terminal and navigate to the directory containing index.ts file.
3. run the command *tsc* without any file name with it.
4. your js file will be created. If error is there in ts file, noEmitOnError will prevent creation of js file.


## to run the TS program
1. first open terminal and navigate to file directory.
2. Next, run the command : tsc filename.ts
3. Next, run the command : node filename.js

## to remove the frequent compilation of the TS file to JS file
1. if you are working on any specific file: tsc filename.ts --watch
2. if you are working on a big project, then in the root directory: tsc -w

## to organize the TS folder structure just like the React folder structure:
1. open the tsconfig.json file
2. search for rootdir and uncomment it and write src after ./
3. search for outdir and uncomment it and write dist after ./