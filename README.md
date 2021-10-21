# Markdown screenshot table generator

1. Make the script executable.
```
chmod +x ./script.js
```

2. Make screenshots (Use `Cmd+S` shortcut to make it faster). Name the files in the following pattern:

```
{"before"/"after"}-{BRAND}-{PLATFORM}-{DESCRIPTION_IN_SNAKE_CASE}
```

Examples:

- `before-ladbrokes-ios-warning.png`
- `after-neds-android-new_super_duper_awesome_popup.jpeg`

3. Upload them to the MR (just drag and drop all the screenshots created). The files will be uploaded and added to the MR description like that:

```
![before-ladbrokes-ios-warning](/uploads/8498721b8bf1c6bffe4f46936507237a/before-ladbrokes-ios-warning.png)
![after-neds-android-new_super_duper_awesome_popup](/uploads/8498721bdfuhdiuhfe2f46936507237a/after-neds-android-new_super_duper_awesome_popup.jpeg)
```

4. Copy the generated lines into the `mr-table-input.md` file and save.

5. Run the utility.
```
node ./script.js
```

6. Voila! Your MR table is generated and is waiting for you in the `mr-table-output.md` file. Just copy and paste it into the MR.

   The format of the table is:

   | Description                                   | Before                        | After                        |
   | --------------------------------------------- | ----------------------------- | ---------------------------- |
   | **[Brand, Platform]**: Your description | Screenshot for 'before' state | Screenshot for 'after' state |

   The size of the screenshot can be changed by modifying the `IMAGE_SIZE` const in the script.
