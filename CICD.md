STEP 1: cPanel-la FTP Details Edungae

1. Unga cPanel account login panni FTP Accounts-ku ponga.
2. Orunew FTP user create pannunga (or existing master FTP login use pannalaam):

Host / Server: ftp.yourdomain.com (or unga domain IP)
Username: deployer@yourdomain.com
Password: your_ftp_password
Directory: public_html

STEP 2: GitHub-la Secrets Add Panninge

1. GitHub Website-la unga Repository open panni, top menu-la Settings click pannunga.
2. Left sidebar-la Secrets and variables ➡️ Actions select pannunga.
3. "New repository secret" button click panni keela ulla 3 Secrets add pannunga:


Secret Name	    Value
FTP_SERVER	= ftp.yourdomain.com (or IP address)
FTP_USERNAME  =	deployer@yourdomain.com
FTP_PASSWORD =	Unga FTP password


STEP 3: Code Push Panni Live Test Panninge!

Terminal-la indha commands-ah run panni code-ah push pannunga:

bash
git add .
git commit -m "Add CI/CD workflow for cPanel auto deployment"
git push origin main
👉 Push pannadhum:
Unga GitHub Repo ➡️ Actions tab-la poyii paarunge! Green tick mark-oda automatic build & FTP upload run aagi 1-2 mins-la cPanel-la site auto-update aaidum! 🎉⚡