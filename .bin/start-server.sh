#!/usr/bin/env bash
function main(){
  cd "./server" || exit 1
  if npm start; then
    printf "starting server\\n"
  else
  exit 1
  fi
}
main
exit 0