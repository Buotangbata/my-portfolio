<script lang="ts">
    interface WorkExperience {
        jobTitle: string,
        company: string,
        startDate: string,
        endDate?: string
    }
    const workExperiences: WorkExperience[] = [
        {
            jobTitle: "Software Manager",
            company: "google",
            startDate: "2021-03"
        },
        {
            jobTitle: "SeniorSoftware Engineer",
            company: "facebook",
            startDate: "2020-03",
            endDate: "2021-03"
        },
        {
            jobTitle: "Software Engineer",
            company: "netflix",
            startDate: "2018-03",
            endDate: "2020-03"
        },
    ]
</script>

<section class="default-margin work-experience mt-m">
    <ul class="work-experience-list">
        {#each workExperiences as workExperience}
            <li class="work-item">
                <article>
                    <h3 class="semi-bold mb-xs">{workExperience.jobTitle}</h3>
                    <div class="company-and-date">
                        <p>{workExperience.company}</p>
                        <p class="dark-grey">{workExperience.startDate}-
                            {#if workExperience.endDate}
                                {workExperience.endDate}
                            {:else}
                                present
                            {/if}
                        </p>
                    </div>
                </article>
            </li>
        {/each}
    </ul>
    <h2 class="headline">precedente esperienza <br/>lavorativa</h2>
</section>

<style>
    .work-experience-list{
        width: 50%;
    }
    .work-experience{
        display: flex;
        justify-content: space-between;
        width: 100%;

    }
    .work-item{
        border-bottom: 1px solid #f0eded;
        padding-bottom: 12px;
    }
    .work-item:not(first-of-type){
        padding-top: 16px;
    }
    .work-item p{
        margin-bottom: 0;
    }
    .company-and-date{
        display: flex;
        justify-content: space-betweenx;
    }

    .headline{
        text-align: right;
    }
</style>
