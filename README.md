# About This Project
This is a Google Chrome browser plugin that disables [smart links](https://community.atlassian.com/t5/Confluence-articles/Smart-Links-a-richer-way-to-hyperlink/ba-p/1412786) in Jira. Once it is installed, URLs will remain as you typed them, and will not be replaced by smart links. It **will not** remove smart links from content authored by other people, only for content authored by you in a browser with this plugin installed.

# Why?

Atlassian products such as [Confluence](https://www.atlassian.com/software/confluence) and [Jira](https://www.atlassian.com/software/jira) have a feature called "[smart links](https://community.atlassian.com/t5/Confluence-articles/Smart-Links-a-richer-way-to-hyperlink/ba-p/1412786)." Smart links replace URLs in written comments with metadata about the linked document, such as the HTML page title. This is a bad feature. It makes written comments harder to understand, hides important information, and injects chaotic, irrelevant text into the middle of a sentence.

Despite [repeated](https://jira.atlassian.com/browse/JRACLOUD-77107) pleas [from](https://jira.atlassian.com/browse/JRACLOUD-72429) Atlassian [users](https://community.atlassian.com/t5/Jira-questions/Is-there-a-way-to-disable-links-transformation-in-JIRA/qaq-p/1728471), there is no way to globally disable the smart links, even for system administrators. The only way to avoid smart links is by manually setting the display mode to "URL" for each and every link you type, or by installing this plugin.

## Smartlinks inject unhelpful additional information

**What you wrote:**

![jira before](https://github.com/MKorostoff/jira-dumb-links/blob/master/docs/__jira_before.png?raw=true)

**What jira displays without this plugin:**

![jira after](https://github.com/MKorostoff/jira-dumb-links/blob/master/docs/__jira_after.png?raw=true)

## Smartlinks make it harder to tell the difference between a dev, stage, and production URL

**What you wrote:**

![dev stage before](https://github.com/MKorostoff/jira-dumb-links/blob/master/docs/__devstage_before.png?raw=true)

**What jira displays without this plugin:**

![dev stage after](https://github.com/MKorostoff/jira-dumb-links/blob/master/docs/__devstage_after.png?raw=true)

## Smartlinks fail for content that requires a login

**What you wrote:**

![dev stage before](https://github.com/MKorostoff/jira-dumb-links/blob/master/docs/__contentful_before.png?raw=true)

**What jira displays without this plugin:**

![dev stage after](https://github.com/MKorostoff/jira-dumb-links/blob/master/docs/__contentful_after.png?raw=true)


# Installation
This is available to [install through the google chrome store](https://chrome.google.com/webstore/detail/jira-dumb-links/benhkamiokceniccopchdlkhcjaakpno). Simply navigate to the plugin page and click 'add to chrome.'

**Alternative installation**
(If you wish to view or modify the source code)
- Download the code in this repository
- Load the plugin to chrome as an [unpacked extension](https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/)

# Limitiations
- This plugin will only stop smartlinks from being added to comments you write. It will not stop smartlinks from displaying in other people's comments.
- Theoretically, this should work with all Atlassian products, but I've only tested it with Jira.
- This plugin works by blocking the specific URLs used to fetch smartlink meta-data. If Atlassian ever changes those URLs, the plugin will fail.
- There is no way to opt-in for smartlinks sometimes, and opt out for others. If you want smart links temporarily, you can disable the extension.
- If you add a dumb link to a confluence page, and someone else later edits that page, it may turn into a smart link.
- Links to jira issues are still part-way smart. If you type "TICKET-123" it will become "https://yourdomain.atlassian.net/browse/TICKET-123" which is an improvement over the default behavior, but I'd still prefer if the visible ticket number didn't change at all from the way I wrote it, except maybe becoming clickable.

# Roadmap
- Provide a "quick disable" feature from the browser toolbar
- Provide settings to let users control which links get smart linked (for instance, keep smart links for external URLs, but keep them for jira issues; keep smart links for certain domains)
- Provide settings to let the user control which atlasian products allow smart links (for instance, opt in for jira, opt out for confluence).
- Remove smart links when reading other people's comments, not just when writing comments.
- Change the behavior of jira issue links so they display as

```html
<a href="https://yourdomain.atlassian.net/browse/TICKET-123">TICKET-123</a>
```

instead of:

```html
<a href="https://yourdomain.atlassian.net/browse/TICKET-123">https://yourdomain.atlassian.net/browse/TICKET-123</a>
```
