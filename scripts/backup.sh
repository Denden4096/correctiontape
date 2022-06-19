cd ..
NOW=`date +"%Y-%m-%dT%I-%M-%S"`

mkdir --parents ./backups/$NOW
find -type f | grep -v -E "(\.history|node_modules|backups|dist)" | xargs cp --archive --parents --suffix="" --target-directory=backups/$NOW

cd backups
tar -czf $NOW.tar.gz $NOW
rm -r $NOW

echo -n "Backup is done! ($NOW) Press Enter: "
read
