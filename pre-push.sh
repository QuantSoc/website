#!/usr/bin/env sh
# . "$(dirname -- "$0")/_/husky.sh"


# Script file for pre-commit checks
# ========================================================
#             .''
#   ._.-.___.' (`\
#  //(        ( `'
# '/ )\ ).__. )    haha scalable horse goes brrrrrrrr 
# ' <' `\ ._/'\                                        
#   `   \     \                                        
# ========================================================

echo "================================================================================";
echo "   ___       ___       ___       ___      ___       ___       ___       ___     ";
echo "  /\  \     /\__\     /\  \     /\__\    /\  \     /\  \     /\  \     /\  \    ";
echo " /::\  \   /:/ _/_   /::\  \   /:| _|_   \:\  \   /::\  \   /::\  \   /::\  \   ";
echo " \:\:\__\ /:/_/\__\ /::\:\__\ /::|/\__\  /::\__\ /\:\:\__\ /:/\:\__\ /:/\:\__\  ";
echo "  \::/  / \:\/:/  / \/\::/  / \/|::/  / /:/\/__/ \:\:\/__/ \:\/:/  / \:\ \/__/  ";
echo "  /:/  /   \::/  /    /:/  /    |:/  /  \/__/     \::/  /   \::/  /   \:\__\    ";
echo "  \/__/     \/__/     \/__/     \/__/              \/__/     \/__/     \/__/    ";
echo "================================================================================";

echo " Starting commit tests..."
echo " Checking style..." 
echo "================================================================================";
  
export ROOT=$(pwd); # project root directory
allow=0;

npm run lint "src/**.{jsx, js}";

allow=$(($((allow)) || $?));

echo "================================================================================";
echo " Checking unit tests..." 
echo "================================================================================";

npm test -- --watchAll=false; 

allow=$(($((allow)) || $?));

echo " ";
echo "================================================================================";

exit $allow;

