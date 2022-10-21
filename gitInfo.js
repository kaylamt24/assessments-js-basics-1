/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = 'This is a a devops tool that is used for source code management. Tracks changes in the source code, allows multiple people to work together and supports non-linear development'

console.log(gitDefinition)

//CODE HERE

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = 'An online database where we are able to save our code to repositories for the projects we are working on. This lets us manage our code better but also lets us track and control changes to the code. This also allows us to share the code with other people so we can work on it together.'
console.log(gitHubDefinition)
//CODE HERE

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

let gitInitDefinition = 'Initialized a local repository in the specific folder.'
console.log(gitInitDefinition)

//CODE HERE

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/
let gitCloneDefinition = 'this is used to point to an existing repo and makes a copy of that repo into a new directory at another location.'
console.log(gitCloneDefinition)


//CODE HERE

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

let gitStatusDefinition = 'This is the command where we want to know about the repo. Displays the state of the working directory and staging area.'
console.log(gitStatusDefinition)

//CODE HERE

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

let gitAddDefinition = 'Adds a change in the working directory to the staging area. Adds filed to the tracked.'
console.log(gitAddDefinition)

const gitAddCode = 'git add .'
console.log(gitAddCode)
//CODE HERE

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

let gitCommitDefinition = 'This creates a snapshot of the files that I am creating. Captures the state of a project at that point in time.'
console.log(gitCommitDefinition)

const gitCommitCode = 'git commit -m "any comment so you know what it is"'
console.log(gitCommitCode)
//CODE HERE


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

let gitPushDefinition = 'allows you to push the commits from your local branch in your local git repository to the remote repository.'
console.log(gitPushDefinition)

//CODE HERE