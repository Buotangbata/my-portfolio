<script lang="ts">
  import type { Snippet } from "svelte";

    interface Buttonprops {
        children: Snippet,
        onclick: ((e:MouseEvent) => void | (() => void)),
        className?: string
    }
    let {children, onclick, className}: Buttonprops = $props();
</script>

<button class={`btn ${className}`} {onclick}>{@render children()}</button>

<style>
    .btn {
        font-family: 'Inter Tight', sans-serif;
        font-weight: 500;
        background-color: black;
        color: white;
        font-size: 24px;
        padding: 12px 40px;
        border-radius: 10px;
    }
</style>
