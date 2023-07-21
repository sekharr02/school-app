import { CanActivateFn } from '@angular/router';

export const notifyGuard: CanActivateFn = (route, state) => {
  
  if(confirm("if you go back u will lose the data! are you willing to go back")){
    return true
  }
  else{
    return false
  }
};
