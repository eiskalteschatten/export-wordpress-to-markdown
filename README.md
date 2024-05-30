# export-wordpress-to-markdown

This is a script that imports WordPress posts and their images to Markdown files.

It will also export authors, categories and tags to JSON files. These will be linked to the exported posts.

## Usage

The script is easy to use. It requires Node.js 18+ (lower versions might work, but aren't tested).

Once you've cloned the repository, you just need to follow the following steps:

1. Run `npm install`.
2. Update the `apiUrl` variable at the top of `index.mjs` with your the URL of your WordPress API.
3. Run `npm start`.

That's it. The script will create a folder called `data` where everything will be saved.

## More Details

See my blog post about this script for more details about my motivations behind it: https://blog.alexseifert.com/2024/05/30/a-script-for-exporting-wordpress-to-markdown/

--

Alex Seifert
https://www.alexseifert.com
