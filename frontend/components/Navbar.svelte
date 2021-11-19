<script>
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
  import { createEventDispatcher } from "svelte";

  const event_dispatcher = createEventDispatcher();

  let isSideNavOpen = false;

  export let content = "empty";

  export let menu_list = [];

  const link_clicked = (e) => {
    event_dispatcher('navbar', e.target.innerText);
  };
</script>

<Header
        persistentHamburgerMenu={true}
        company="CSU"
        platformName="School Data Hub"
        bind:isSideNavOpen
>
    <div slot="skip-to-content">
        <SkipToContent />
    </div>

    <HeaderNav>
        {#each menu_list as menu_item}
            {#if menu_item.type === "item"}
                <HeaderNavItem text={menu_item.name} on:click={link_clicked}/>
            {/if}
            {#if menu_item.type === "menu"}
                <HeaderNavMenu text={menu_item.name}>
                    {#each menu_item.menu as menu_item}
                        <HeaderNavItem text={menu_item.name} on:click={link_clicked}/>
                    {/each}
                </HeaderNavMenu>
            {/if}
        {/each}
    </HeaderNav>
    <img src="/img/hub.png" alt="School Data Hub" style="width:25px">
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
    <SideNavItems>
        {#each menu_list as menu_item}
            {#if menu_item.type === "item"}
                <SideNavLink text={menu_item.name} on:click={link_clicked}/>
            {/if}
            {#if menu_item.type === "menu"}
                <SideNavMenu text={menu_item.name}>
                {#each menu_item.menu as menu_item}
                    <SideNavLink text={menu_item.name} on:click={link_clicked}/>
                {/each}
                </SideNavMenu>
            {/if}
        {/each}
    </SideNavItems>

</SideNav>

<Content>
                {content}
</Content>