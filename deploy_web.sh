#! /bin/bash

echo What should be the branch?
read BRANCH

echo What should be the commit message?
read COMMIT

git checkout -m $BRANCH

git add .

git commit -m $COMMIT

git push origin $BRANCH