#!/usr/bin/env bash
function main(){
  cd "./client" || exit 1
  if npm start; then
      printf "starting client\\n"
  else
  exit 1
  fi
}
main
exit 0