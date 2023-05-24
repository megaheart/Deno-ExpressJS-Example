# Simple Webserver with Deno and Express

## Install Deno

[2023-05-24] Some problems occured when I ran installation command (`iwr https://deno.land/x/install/install.ps1 | iex`) from [official Deno website](https://deno.com/manual@v1.33.4/getting_started/installation). So I changed `install.ps1` a little to make it runable.

Run under command in Powershell (Administrator premission) (Replace `{Work Directory}` with the absolute repository folder path):

`irm "{Work Directory}/deno-installation.ps1" -useb | iex`

Example: 

`irm "C://Deno-ExpressJS/deno-installation.ps1" -useb | iex`
