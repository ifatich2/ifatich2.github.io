import PropTypes from "prop-types";

const Breadcrumbs = ({ items = [], links = [] }) => {
    return (
        <>
        <nav aria-label="breadcrumb" className="container">
            <ol className="breadcrumb">
                {items.length > 0 && items.map((item, idx) => (
                    <li key={item} className={`breadcrumb-item ${ idx === items.length - 1 ? "active" : "" }`}  >
                        {idx === items.length - 1 && item}
                        {idx !== items.length - 1 && (
                            <a href={links[idx]}>{item}</a>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
        </>
    )
}

Breadcrumbs.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.arrayOf(PropTypes.string)
};

Breadcrumbs.defaultProps = {
    items: ["Root", "Level 1", "Level 2", "Level 3"],
    links: ["/root", "/level-1", "/level-2", "/level-3"]
};

export default Breadcrumbs;
