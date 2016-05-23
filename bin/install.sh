#!/usr/bin/env bash


# Running scenario (tasks order):
function scriptScenario() {
    checkRootPriveleges
    welcomeMessage
    infoPause
    installDependencies
    installNodePackages
    configureNginx
    configureNode
    configureVpnTunnel
    configureNfsStorage
    configureOthers
    createWebrootDirectories
    deployRepositories
    execDeploymentScripts
    setProperPermissions
    restartAndCheckServices
    completedMessage
}

function infoPause() {
    read -n1 -r -p "Press CTRL+C to terminate execution or ANY OTHER KEY to continue..." key
    if [ "$key" = '' ]; then
        # Space pressed, do something
        echo "Starting installation...";
    fi
}

function checkRootPriveleges() {
    if [[ $EUID -ne 0 ]]; then
        echo "You must be root to execute this script. Try again with sudo.";
        exit 1;
    fi
}

function welcomeMessage() {
    echo "Hello!";
    echo "This is spetrenko.ru server auto-entroll script.";
    echo "Be aware: some system config will be overwritten without recovery possibility!";
    echo "";
    echo "We are promise that script will be executed only over CLEAN CentOS 7 (minimal packages)";
}

function installDependencies() {
    echo "[ * ] Linking required repos..."
    yum install epel-release gcc-c++ make -y
    touch /etc/yum.repos.d/nginx.repo
    echo "[nginx]
    name=nginx repo
    baseurl=http://nginx.org/packages/mainline/centos/\$releasever/\$basearch/
    gpgcheck=0
    enabled=1" > /etc/yum.repos.d/nginx.repo
    curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -

    echo "[ * ] Installing packages..."
    yum install nginx nano git php gcc-c++ make -y
}

function installNodePackages() {
    npm install -g webpack pm2
    npm update
    npm upgrade

}

function deployRepositories() {
    cd ~
    mkdir spetrenko.ru.deploid
    cd spetrenko.ru.deploid
    git clone
}

function configureNginx() {

}

function configureNode() {
    pm2 startup systemd

}

function configureVpnTunnel() {


}

function configureNfsStorage() {


}

function configureOthers() {


}


function createWebrootDirectories() {


}

function execDeploymentScripts() {


}


function setProperPermissions() {


}

function restartAndCheckServices() {


}

function completedMessage() {


}

# Execute everything
scriptScenario