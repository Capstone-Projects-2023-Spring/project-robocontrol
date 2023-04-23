# tread-bot-opencv
Working to update.

## Testing Commands
```sh
coverage run -m pytest -vvv -s # Run the unit tests
coverage report --omit="/opt/*","/usr/*" -i --skip-empty # Show the coverage report, skip empty files, omit imported files
coverage html --omit="/opt/*" -i --skip-empty # Output to HTML page
```