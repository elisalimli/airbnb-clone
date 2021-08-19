#! /bin/bash


BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
echo your current branch is $BRANCH

echo Do you want to proceed ? [y/n]
read GO

echo Value is $GO
if [ $GO == 'y' ]
then
echo going on...
else
echo quiting...
exit 1
fi

echo What should be the branch ? [staging/prod] 
read USER_BRANCH


if [ $branch == $USER_BRANCH ]
then
    echo you do not have to change your branch.
else
    git checkout -m $USER_BRANCH
fi


echo What should be the commit message?
read COMMIT

yarn workspace @abb/web style

netlify build

git add .
git commit -m "$COMMIT"
git push origin $USER_BRANCH