# Command Line Cheat Sheet

## git

### configuration

#### installing git
apt-get install git
apt-get install git-core

#### settings

##### set your name, email
git config --global user.name "Name"
git config --global user.email "email"

##### default behavior for push, color ui
git config --global push.default current
git config --global color.ui true
git config --global core.editor "editor"
git config --global merge.tool "tool"
git config --list
git config "config"

#### aliases
git config --global alias."name" "alias"
git config --global alias.lol "log --graph --decorate --pretty=oneline --abbrev-commit --all"
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.pl pull

#### line-endings
git config --global core.autocrlf input (line-endings for Unix OS)
git config --global core.autocrlf true (line-endings for Windows OS)
*.sh    text eol=lf (in .gitattributes)
*.bat   text eol=crlf (in .gitattributes)

### basics
git init

#### adding remotes
git remote add "name" "url"

#### cloning
git clone "url"

#### staging and committing
git add "file"
git add .txt ( staging all txt files in current directory )
gti add '.txt' ( staging all txt files in the entire project )
gti add --all ( staging all files )
git commit -a -m 'message' ( staging and comitting changes at the same time )

#### removing and untracking
git rm "file" ( delete from git and from file system )
git rm --cached "file" ( keeps in the file system and delete from git, just stops tracking it )
git clean -f ( delete file from untracked area )
git clean -d ( delete directory from untracked area )

### branches

#### creating
git branch "branch"
git checkout -b "branch" ( create a new branch and checkout )

#### change to a branch
git checkout "branch"

#### listing
git branch ( local )
git branch -r ( remote )

#### merging
git merge "branch"

#### pulling
git pull
git pull "remote" "branch"

#### pushing
git push
git push -u "remote" "branch" ( start tracking it )
git push "remote" "branch"

#### deleting 
git branch -d "branch" ( local )
git branch -D "branch" ( local - force )
git push "remote" --delete "branch" ( remote )
git push "remote" :"branch" ( remote )

### history

#### rolling back changes
git reset --soft HEAD^
git reset --hard HEAD~1  (removing last commit if not pushed)
git reset --hard "commit"
git commit --amend
git rebase

### remote
git remote show origin
git remote prune "remote" ( clean deleted remote branches )
git push "remote" "local-branch":"remote-branch"
git push heroku-staging staging:master

### stashing
git stash
git stash save 'message'
git stash save -u 'message' (for stash untracked files)
git stash list
git stash pop
git stash apply
git stash clear
git stash show stash@{ "stash_index" }
git stash show -p stash@{ "stash_index" }
git stash show --stat
git stash branch "name_for_new_branch_from_stash"

### cherry-pick
git cherry-pick "hash" (get the hash commit from other branch)
git cherry-pick --edit "hash" (edit the commit message)
git cherry-pick --no-commit "hash" "hash" (get 2 commits and added to HEAD without commit)
git cherry-pick -x "hash" (keeps track of where the cherry-picked commit is coming from)
git cherry-pick --signoff "hash" (commits who did the cherry-picking)

### submodules
git submodule add "repo" (add the submodule)
git submodule init (initialize the submodules)
git submodule update (checkouts the submodules)
git checkout "branch" (checkout inside submodules, they start on no branch)
git push --recurse-submodules=check (to check if are uncommited changes inside submodules)
git push --recurse-submodules=on-demand (to automatically commit changes inside submodules)

### tags
git tag ( list )
git checkout ( tag )
git tag -a "tag" -m 'msg' ( adding tag )
git push --tags ( pushing to remote )

### log
git log

#### log one line with just hash and commit msg
git log --pretty=oneline

#### print a diff with changes
git log --oneline -p

#### print stats
git log --oneline --stat

#### graph
git log --oneline --graph
git log --oneline --graph --decorate --color

#### time filter
git log --until=1.minute.ago
git log --since=1.day.ago
git log --since=1.hour.ago
git log --since=1.month.ago --until=2.weeks.ago

### reflogs
git reflog
git hard --reset "hash" (reset to a hash commit in the reflog)
git hard --reset HEAD@{ "commit_index" }
git log --walk-reflogs
git branch "branch" "hash" (get back a deleted branch)
git branch "branch" HEAD@{ "commit_index" }

### diffs
git diff
git diff HEAD
git diff HEAD^^
git diff HEAD~5
git diff HEAD^..HEAD
git diff "hash".."hash"
git diff "branch" "branch"
git diff --since=1.hour.ago

### blame
git blame "file" --date short

### excluding and ignoring

__put the name of the file/folder in the file__

#### excluding
.git/info/exclude
experiment/
tutorial.mp4
*.mp4
logs/*.log

#### ignoring
.gitignore 
logs/*.log

---
## npm

### config
npm config [args...]

#### list defaults
npm config ls

#### list all defaults
npm config ls -l

#### set default values when using 'npm init'
npm set init.author.name "Juan Carlos Quintero"
npm set init.author.email "jcquintero.ce@gmail.com"
npm set init.author.url "http://juancarlosqr.js.org/"
npm set init.license MIT

#### set proxy
npm config set proxy http://proxy.company.com:8080

#### getting global npm location
npm config get prefix

#### setting global npm location
npm config set prefix=$HOME/.node_modules_global

#### export PATH
export PATH="$HOME/.node_modules_global/bin:$PATH"

### dependencies

#### start a new project
npm init

### packages

#### listing global
npm ls -g --depth=0
npm list -g --depth=0
npm list -g

#### listing local
npm ls
npm list

#### installing global
npm i "package" -g
npm install "package" -g
npm install "package" --global
npm install "package"@{semver_version} --global

#### installing local
npm i "package" [ -S | -D ]
npm install "package" [ -S | -D ]
npm install "package"@{semver_version} [ -S | -D ]
-S = --save = save package to dependencies in package.json
-D = --save-dev = save package to devDependencies in package.json

##### uninstall global
npm uninstall "package" -g

##### uninstall local
npm uninstall "package"

#### pruning
npm prune (clean packages that are not present in package.json)

#### update
npm update "package"

#### search
npm search "package"

### cache
npm clean
npm cache clean

### linking
npm link

### help
npm "cmd" -h
npm help "cmd"
npm help install
npm help start
npm help test
npm help json

### publishing
npm publish

### scripts in package.json
npm run|run-script (list)
npm run|run-script "cmd" (run the cmd script)

#### shorcuts
npm start
npm stop
npm test

#### examples
npm run deploy
npm run lint

#### hooks
npm run prepublish | postpublish
npm run prebuild | postbuild
npm run prestart | poststart
npm run prestop | poststop
npm run pretest | posttest

### others
npm login

npm completion

npm owner ls "package" (get the package's owner)

npm bug "package" (open the GitHub issues page in browser)

---
## node.js

#### install
npm install -g "package"
sudo npm install grunt --save-dev
npm install

#### uninstall
npm uninstall "package"
npm uninstall -g "package"
sudo npm uninstall "package"
sudo npm uninstall -g "package"
npm -g rm "package"

---
## ssh

#### generate keys
ssh-keygen -t rsa -C "email"

#### copy public key
cat ~/.ssh/key.pub | pbcopy

#### testing ssh
ssh -T git@github.com
ssh -T git@bitbucket.org

---
## linux 

#### listening services 
sudo netstat -lptu
sudo netstat -tulpn

#### find process by pid
ps aux | grep {pid}

#### untar tgz files
tar zxvf {file}.tgz

#### tar.gz files
tar -zcvf [output_file].tar.gz [files|directory|regex]  (-z uses gzip compress)
tar -jcvf [output_file].tbz2 [files|directory|regex]    (-j uses bzip2 compress)
tar xf {file}.tar.gz

#### reload terminal
source ~/.zshrc
source ~/.bash_profile
source ~/.bashrc

#### deleting files and directories recursively
find ./ -type f -name "*.pyc" -exec rm {} \; (files)
find ./ -type d -name [folder_name] -exec rm -rf {} \; (directories)

---
## apache

/etc/init.d/apache2 start
/etc/init.d/apache2 restart
/etc/init.d/apache2 stop
http://phptechnologytutorials.wordpress.com/2013/04/27/operate-xampp-in-ubuntu-using-command-line/

---
## xampp

sudo chmod 755 xampp-linux-1.8.2-2-installer.run 

sudo ./xampp-linux-1.8.2-2-installer.run

/opt/lampp/lampp start
/opt/lampp/bin/mysql
/opt/lampp/etc/http.conf
/opt/lampp/etc/extra/httpd-vhosts.conf
/etc/hosts

### PHP path in Windows

c:/xampp/php/php.exe

---
## mysql

### connect
mysql -u [user] -p

### export / backup 
mysqldump -u [user] -p [database] > dumpfilename.sql
mysql -u [user] -p [database] > script.sql

### import / restore
mysql -u [user] -p [database] < script.sql

### create db
create database [database]

### create user

### grant privileges

### set root password in phpmyadmin 

#### set the password with mysqladmin
/opt/lampp/bin/mysqladmin -u root password [your_password]

#### set auth_type value to 'cookie'
In /opt/lampp/phpmyadmin/config.inc.php change to this

```
$cfg['Servers'][$i]['auth_type'] = 'cookie';
```

---
## oh-my-szh

#### update
apt-get update

#### install zsh
apt-get install zsh

#### get oh-my-szh
curl -L https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh | sh
wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh
wget --no-check-certificate https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O - | sh

#### set zsh default
chsh -s /bin/zsh
chsh -s `which zsh`

#### set theme
nano .zshrc
pygmalion
bira

---
## wget

#### download single file
wget {file}

#### download entire site
wget --no-parent -r -p -U Mozilla http://wp-desk.com/lovinflat/

---
## mac command line

#### listing processes
sudo lsof -i -n -P | grep LISTEN

#### killing processes
sudo kill -9 {pid}
