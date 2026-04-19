=========================================================================================
                     DOCKER INSTALLATION AND SETUP (WINDOWS)
=========================================================================================


=========================================================================================
# 0. REQUIREMENTS
=========================================================================================

Before installing Docker Desktop, check:

- Windows 10/11 (64-bit)

- Virtualization enabled in BIOS

- WSL2 supported

- Admin access


=========================================================================================
# 1. INSTALL WSL2
=========================================================================================

Open PowerShell (Run as Administrator)

Command:

wsl --install


Restart PC if required.

Check version:

wsl --version


Docker Desktop commonly uses WSL2.


=========================================================================================
# 2. DOWNLOAD DOCKER DESKTOP
=========================================================================================

Go to:

https://www.docker.com/products/docker-desktop/


Download:

Docker Desktop for Windows


=========================================================================================
# 3. INSTALL DOCKER DESKTOP
=========================================================================================

Run installer.

During installation make sure:

✓ Use WSL2 backend enabled

(Usually checked by default)


Finish installation.

Restart if asked.


=========================================================================================
# 4. START DOCKER
=========================================================================================

Open:

Docker Desktop

Wait until Docker Engine starts.

If you see Docker running,

Setup is mostly done.


=========================================================================================
# 5. VERIFY INSTALLATION
=========================================================================================

Open terminal.

Check Docker:

docker --version


Check engine:

docker info


Check running containers:

docker ps


=========================================================================================
# 6. TEST WITH FIRST CONTAINER
=========================================================================================

Run:

docker run hello-world


If installed correctly,

Docker pulls image and runs test container.


This is the classic first test.


=========================================================================================
# 7. OPTIONAL TEST
=========================================================================================

Run nginx:

docker run nginx


Basic container test.


=========================================================================================
# 8. COMMON ISSUES
=========================================================================================

Issue:

docker command not found

Fix:

Restart terminal.

---------------------------------------------------------

Issue:

WSL2 not working

Fix:

Update WSL.

---------------------------------------------------------

Issue:

Virtualization disabled

Fix:

Enable in BIOS.


=========================================================================================
# 9. WHAT GOT INSTALLED?
=========================================================================================

Usually you now have:

- Docker Desktop

- Docker Engine

- Docker CLI

- WSL2 backend


=========================================================================================
# 10. INTERVIEW QUESTION
=========================================================================================

Q: How do you install Docker on Windows?

Answer:

Install WSL2, download Docker Desktop, enable the WSL2 backend during
installation, start Docker Desktop, then verify it using docker --version
and docker run hello-world.


=========================================================================================
                                     THE END
=========================================================================================