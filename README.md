# RobinsHomepage

 A little bit about myself.

## Table of Contents

- [cmds](docs/cmds.md)
- Features
  - [Current / Open](docs/features.md)
  - [Completed](docs/features-completed.md)
  - [Abandoned](docs/features-abandoned.md)
  - [On Hold](docs/features-on-hold.md)
  - [Priority](docs/features-priority.md)
- Issues
  - [Current / Open](docs/issues.md)
  - [Completed](docs/issues-completed.md)
  - [Abandoned](docs/issues-abandoned.md)
- [Localization](docs/localization.md)
- [Firebase](docs/firebase.md)
- [Workflows](docs/workflows.md)

---

## Dev - Initial Setup

1. Clone the Repository
2. run `npm install` (this will install all packages and and get rid of various relating error messages)
3. Refer to the [Firebase](docs/firebase.md) and [Workflows](docs/workflows.md) file for further things, if at all, needed.

> Make sure you have the global packages available via the path variable
(in windows it would an environment varibale.
You can simply add `C...absolutePathTo\AppData\Roaming\npm`.
Make sure to use backslash, and not forward slash, and to have the npm folder,
which contains the cmd .ps files if you look into it, as the last folder,
and not npm\nodes_modules because, the said cmds will make use of the node_modules folder)  
>
> I'am using, firebase, firebase-tools, http-server and @angular/cli
http-server is the only optional thing in here.
