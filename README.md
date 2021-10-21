# [FLEX] Markdown screenshot table generator

A utility to help with generating before/after screenshot comparison markdown table for front-end and RN merge requests.

## Prerequisites

1. Make the script executable.
```
chmod +x ./script.js
```

## How to use the script

1. Make screenshots (Use `Cmd+S` shortcut to make it faster if using simulator or `Cmd+Shift+3` for web). Name the files in the following pattern (**IMPORTANT**):

```
{"before"/"after"}-{BRAND}-{PLATFORM}-{DESCRIPTION_IN_SNAKE_CASE}
```

For example:

- `before-ladbrokes-ios-warning.png`
- `after-neds-android-new_super_duper_awesome_popup.jpeg`

2. Upload them to the MR (just drag and drop all the screenshots to the MR description). The files will be uploaded and displayed like the following:

```
![before-ladbrokes-ios-warning](/uploads/8498721b8bf1c6bffe4f46936507237a/before-ladbrokes-ios-warning.png)
![after-neds-android-new_super_duper_awesome_popup](/uploads/8498721bdfuhdiuhfe2f46936507237a/after-neds-android-new_super_duper_awesome_popup.jpeg)
```

3. Copy the generated lines into the `mr-table-input.md` file and save.

4. Run the utility.
```
node ./script.js
```

5. Voila! Your MR table is generated and is waiting for you in the `mr-table-output.md` file. Just copy and paste it into the MR.

   The format of the table is:

   | Description                                   | Before                        | After                        |
   | --------------------------------------------- | ----------------------------- | ---------------------------- |
   | **[Brand, Platform]**: Your description | Screenshot for 'before' state | Screenshot for 'after' state |

   The size of the screenshot can be changed by modifying the `IMAGE_SIZE` const in the script.
