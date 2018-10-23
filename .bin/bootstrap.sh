#!/usr/bin/env bash
CWD=$(pwd)
function main(){
  cd "./client" || exit 1
  echo $(pwd)
  if npm install; then
  cd ".." || exit 1
  else
    printf "Could not run npm install on folder client\\n"
    printf "Please report this issue at \"https://github.com/ixds/redux-and-rest/issues\"\\n"
    exit 1
  fi
  cd "./server" ||  exit 1
  echo $(pwd)
  if npm install; then
    printf "Bootstrap done\\n"
  else
    printf "Could not run npm install on folder server\\n"
    printf "Please report this issue at \"https://github.com/ixds/redux-and-rest/issues\"\\n"
    exit 1
  fi
}
main
exit 0