import React from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends React.Component {
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
        isOpen: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        this.props.onClick(this.props.label);
    };

    render() {
        const {
            onClick,
            props: { isOpen, label },
        } = this;

        return (
            <div class="panel panel-default">
                <div onClick={onClick} style={{ cursor: 'pointer' }}>
                    <div class="panel-heading" role="tab">
                        <h4 class="panel-title">
                            <a className={isOpen ? "" : "collapsed"} aria-expanded={isOpen}>{label}
                            </a>
                        </h4>
                    </div>
                </div>
                {isOpen && (
                    <div class="panel-collapse collapse in" role="tabpanel">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-6">{this.props.children}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default AccordionSection;