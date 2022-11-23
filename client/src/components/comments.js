<div>
    <h2>Comments</h2>
    <div>
        {{#if comment.length}}
        <div>
            {{#each comment as |comment|}} {{> comment-partials comment}} {{/each}}
        </div>
        {{/if}}
    </div>
</div>