import React from 'react';
import PropTypes from 'prop-types';

import AccordionSection from './AccordionSection';

class Accordion extends React.Component {
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
    };

    constructor(props) {
        super(props);

        const openSections = {};

        this.state = { openSections };
    }

    onClick = label => {
        const {
            state: { openSections },
        } = this;

        const isOpen = !!openSections[label];

        this.setState({
            openSections: {
                [label]: !isOpen
            }
        });
    };

    render() {
        const {
            onClick,
            props: { children },
            state: { openSections },
        } = this;

        if (children.length > 1) {
            return (
                <div role="tablist">
                    {children.map(child => (
                        <AccordionSection
                            isOpen={!!openSections[child.props.label]}
                            label={child.props.label}
                            onClick={onClick}
                        >
                            {child.props.children}
                        </AccordionSection>
                    ))}
                </div>
            );
        }
        else {
            return (
                <div role="tablist">
                    <AccordionSection
                        isOpen={!!openSections[children.props.label]}
                        label={children.props.label}
                        onClick={onClick}
                    >
                        {children.props.children}
                    </AccordionSection>
                </div>
            );
        }
    }
}

export default Accordion;