import React, { Component } from "react";

import { i18n as i, withTranslation } from "../i18n";

class Index extends Component {
	componentDidMount() {
		console.log(navigator.language, i.language, i.languages);
	}

	static async getInitialProps({ query }) {
		return { ...query, namespacesRequired: ["common"] };
	}

	render() {
		return <div>hello</div>;
	}
}

export default withTranslation("common")(Index);
