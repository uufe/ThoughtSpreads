read input

regex="[0-9]"

if [[ $input =~ $regex ]];then
    echo "match"
else
    echo "dismatch"
fi