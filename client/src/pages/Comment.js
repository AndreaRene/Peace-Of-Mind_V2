<div>
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
    <div>
        <h2>Share your thoughts:</h2>
        <form id="new-comment-form">
            <input type="hidden" name="post-id" value="" />
            <div>
                <label>Comment:</label>
                <textarea name="comment-body" data-number="8"></textarea>
            </div>
            <button type="submit"><img src="/imgs/save-icon.png"/></button>
        </form>
    </div>