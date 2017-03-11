#!/bin/bash
set -ex

FILES=()
for i in $( git status -s | sed 's/\s*[a-zA-Z?]\+ \(.*\)/\1/' ); do
  FILES+=( "$i" )
done
#echo "${FILES[@]}"

CMDS=()
for i in "${FILES[@]}"; do
  CMDS+=("--include=$i""*")
done
#echo "${CMDS[@]}"

echo "${CMDS[@]}" | xargs aws s3 sync ./_site/ s3://christianfei.com --acl public-read  --region eu-central-1 --exclude "*" 
