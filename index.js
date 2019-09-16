var exec = require('child_process').exec;

var command = `node ./exec_console_log_stack_issue.js`;
//function execute(command, callback){
    exec(command, function(error, stdout, stderr){ console.log(stdout); });
//};


