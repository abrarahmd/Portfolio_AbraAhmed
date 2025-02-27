<script setup lang="ts">
interface Props {
  title: string
  path: string
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  path: "",
})

const copied = ref(false)
const shareUrlRef = ref<HTMLInputElement>()


const share = (option: "url" | "facebook" | "linkedin") => {
  if (option === "url") {
    let el = shareUrlRef.value;

    if (!el) {
      el = document.createElement("input");
      el.value = props.path ? `https://abrarahmd.dev${props.path}` : `https://abrarahmd.dev`;
      document.body.appendChild(el);

      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    } else {
      el.select();
      document.execCommand("copy");
    }

    copied.value = true;
    setTimeout(() => (copied.value = false), 3000);
  } else {
    let shareUrl = "";

    switch (option) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(location.href)}`;
        break;
    }

    window.open(shareUrl, '_blank');
  }
};


</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <Button rounded @click.native="share('facebook')">
      <Icon name="mdi:facebook" class="text-[#1877F2] h-6 w-6 align-middle" />
    </Button>

    <Button rounded @click.native="share('linkedin')">
      <Icon name="mdi:linkedin" class="text-[#0077B5] h-6 w-6 align-middle" />
    </Button>

    
    <Button rounded @click.native="share('url')">
      <Icon
        v-if="copied === true"
        name="heroicons:check"
        class="text-green-500 h-6 w-6 align-middle"
      />

      <Icon
        v-else
        name="heroicons:link"
        class="text-gray-800 dark:text-gray-200 h-6 w-6 align-middle"
      />
    </Button>

    <input
      ref="shareUrlRef"
      readonly
      :value="`https://abrarahmd.dev${path}`"
      class="hidden"
    />
  </div>
</template>
