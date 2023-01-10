# LDES viewer









When getting error 'Error message "error:0308010C:digital envelope routines::unsupported"':

Linux and macOS (Windows Git Bash)-

export NODE_OPTIONS=--openssl-legacy-provider
Windows command prompt-

set NODE_OPTIONS=--openssl-legacy-provider
Windows PowerShell-

$env:NODE_OPTIONS = "--openssl-legacy-provider"
Reference link.
