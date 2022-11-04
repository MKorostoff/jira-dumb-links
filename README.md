# About This
This is a Google Chrome browser plugin that disables [smart links](https://community.atlassian.com/t5/Confluence-articles/Smart-Links-a-richer-way-to-hyperlink/ba-p/1412786) in Jira. Once it is installed, URLs will remain as you typed them, and will not be replaced by smart links. It **will not** remove smart links from content authored by other people, only for content authored in a browser with this plugin installed.

# Why?

Atlassian products such as [Confluence](https://www.atlassian.com/software/confluence) and [Jira](https://www.atlassian.com/software/jira) have a feature called "[smart links](https://community.atlassian.com/t5/Confluence-articles/Smart-Links-a-richer-way-to-hyperlink/ba-p/1412786)." Smart links replace URLs in written comments with metadata about the linked document, such as the HTML page title.

This is a bad feature. It makes written comments harder to understand, hides important information, and injects chaotic, irrelevant text into the middle of a sentence.

For instance, smartlinks inject unhelpful additional information into the page:

## What you wrote:
![jira before](https://github.com/MKorostoff/jira-dumb-links/blob/master/docs/__jira_before.png?raw=true)

## What jira displays:
![jira after](https://github.com/MKorostoff/jira-dumb-links/blob/master/docs/__jira_after.png?raw=true)

Smartlinks make it harder to tell the difference between a dev, stage, and production URL:

## What you wrote:
![dev stage before](https://github.com/MKorostoff/jira-dumb-links/blob/master/docs/__devstage_before.png?raw=true)

## What jira displays:
![dev stage after](https://github.com/MKorostoff/jira-dumb-links/blob/master/docs/__devstage_after.png?raw=true)

Smartlinks fail for content that requires a login:

## What you wrote:
![dev stage before](https://github.com/MKorostoff/jira-dumb-links/blob/master/docs/__contentful_before.png?raw=true)

## What jira displays:
![dev stage after](https://github.com/MKorostoff/jira-dumb-links/blob/master/docs/__contentful_after.png?raw=true)

Despite [repeated](https://jira.atlassian.com/browse/JRACLOUD-77107) pleas [from](https://jira.atlassian.com/browse/JRACLOUD-72429) Atlassian [users](https://community.atlassian.com/t5/Jira-questions/Is-there-a-way-to-disable-links-transformation-in-JIRA/qaq-p/1728471), there is no way to globally disable the smart links, even for system administrators. The only way to avoid smart links is by manually setting the display mode to "URL" for each and every link you type.


# Installation

# Limitiations

# Roadmap
