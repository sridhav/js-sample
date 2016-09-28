Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = "ubuntu.box"
  config.vm.provider "virtualbox"
  config.vm.network :private_network, ip: "172.18.0.24"

  config.vm.provider :virtualbox do |vb|
    vb.customize [
      "modifyvm", :id,
      "--cpuexecutioncap", "100",
      "--memory", "1024",
    ]
  end

  config.vm.synced_folder "project", "/data/env/dev/"

  config.vm.provision "shell", path: "./provision.sh"

end