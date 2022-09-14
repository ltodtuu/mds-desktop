import { computed, onMounted } from 'vue';
import { useLoginState, usePermissionsState, useUserState } from '../store';
import type { Permission } from '../../../types';

export function usePermissions() {
  const loginState = useLoginState();
  const permissionsState = usePermissionsState();
  const userState = useUserState();

  const allUsers = computed(() => userState.getters.users);
  const allPermissions = computed(() => permissionsState.getters.getPermissions);
  const loggedInUserId = computed(() => loginState.getters.loggedInUserId);
  const loggedInUserPermissions = computed(() => allPermissions.value().get(loggedInUserId.value()));

  onMounted(() => {
    permissionsState.dispatch('retrievePermissions', loggedInUserId.value());
  });

  function checkPermissions(permissions: Permission[]): boolean {
    if(allUsers.value().has(loggedInUserId.value()) && allUsers.value().get(loggedInUserId.value())?.is_admin) {
      return true;
    }
    let userHasPermissions = false;
    //
    if(loggedInUserPermissions.value) {
      userHasPermissions = true;
      for(const permission of permissions) {
        console.log(loggedInUserPermissions.value?.filter((elem) => elem.name === permission.name));
        if(!(loggedInUserPermissions.value?.filter((elem) => elem.name === permission.name).length > 0)) {
          userHasPermissions = false;
        }
      }
    }
    return userHasPermissions;
  }

  return checkPermissions;
}