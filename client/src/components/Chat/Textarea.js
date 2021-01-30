import React from 'react';

function Textarea(props) {
    return (
        <div className="form-group mt-3 mb-0">
            <textarea className="form-control" rows="3"
                      placeholder="Type your message here..."
                      value={props.message}
                      onChange={e => props.setMessage(e.target.value)}
                      onKeyPress={e => e.key === 'Enter' ? props.sendMessage(e) : null}></textarea>
        </div>
    );
}

export default Textarea;