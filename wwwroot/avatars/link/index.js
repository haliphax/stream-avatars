import { AvatarMixIn, store } from '../../avatars.js';

'use strict';

/** default avatar component */
Vue.component('avatar-link', {
	mixins: [AvatarMixIn],
	template: `
		<div class="avatar link">
			<span class="avatar-label">{{ avatar.user.user }}</span>
		</div>
	`,
});

if (store.state.availableAvatars.indexOf('link') < 0)
	store.commit('registerAvatar',
		['avatar-link', 'avatars/link/styles.css']);
