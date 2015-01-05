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

#### untar tar.gz files
tar xf {file}.tar.gz

#### reload terminal
source ~/.zshrc
source ~/.bash_profile
source ~/.bashrc

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

---
## mysql

### connect
mysql -u root -p

### import
mysql -u root -p "database" > script.sql

###create db
create database "database"

### create user

### grant privileges

### set root password in phpmyadmin 

#### in the mysql console set a new password
mysqladmin -u root password 'your_password'

#### set auth value to 'cookie' in config.inc.php ()

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