import React from "react"
import { mount, shallow } from "enzyme"
import UserContextProvider from "../../contexts/UserContextProvider"
import ActionPoint from "../ActionPoint"
import { BrowserRouter } from "react-router-dom"

describe("Test'renderActionPoint'", () => {
	it("it renders internal link class correctly", () => {
		const linkInternal = {
			getFrontendUrl: "/myFrontendURL",
			title: "My Frontend URL",
		}
		const wrapper = mount(
			<UserContextProvider>
				<BrowserRouter>
					<ActionPoint linkInternal={linkInternal} linkKind={0} />
				</BrowserRouter>
			</UserContextProvider>
		)
		expect(wrapper.find("a").at(1).hasClass("internal-link")).toBe(true)
		// Ger varning "<a> cannot appear as a descendant of <a>""
	})

	it("it renders external link class correctly", () => {
		const wrapper = shallow(<ActionPoint linkKind={1} />)
		expect(wrapper.find("a").hasClass("external-link")).toBe(true)
	})

	it("it renders modal link class correctly", () => {
		const wrapper = mount(
			<UserContextProvider>
				<ActionPoint linkKind={2} />
			</UserContextProvider>
		)
		expect(wrapper.find("a").hasClass("modal-link")).toBe(true)
	})

	it("it renders document link class correctly", () => {
		const wrapper = mount(
			<UserContextProvider>
				<ActionPoint linkKind={3} />
			</UserContextProvider>
		)
		expect(wrapper.find("a").hasClass("document-link")).toBe(true)
	})

	it("it returns 'null' correctly if there is no 'linkKind'", () => {
		const wrapper = mount(
			<UserContextProvider>
				<ActionPoint />
			</UserContextProvider>
		)
		expect(wrapper.find("a")).not.toBe(true)
	})
})

describe("Test'getIconCSSClass'", () => {
	it("returns 'links__icon--' class correctly", () => {
		const wrapper = mount(
			<UserContextProvider>
				<ActionPoint linkKind={1} iconKind={0} />
			</UserContextProvider>
		)
		expect(wrapper.find("a").hasClass("links__icon--")).toBe(true)
	})

	it("returns 'links__icon--image' class correctly", () => {
		const wrapper = mount(
			<UserContextProvider>
				<ActionPoint linkKind={1} iconKind={1} />
			</UserContextProvider>
		)
		expect(wrapper.find("a").hasClass("links__icon--image")).toBe(true)
	})

	it("returns 'links__icon--video' class correctly", () => {
		const wrapper = mount(
			<UserContextProvider>
				<ActionPoint linkKind={1} iconKind={2} />
			</UserContextProvider>
		)
		expect(wrapper.find("a").hasClass("links__icon--video")).toBe(true)
	})

	it("returns 'links__icon--link' class correctly", () => {
		const wrapper = mount(
			<UserContextProvider>
				<ActionPoint linkKind={1} iconKind={3} />
			</UserContextProvider>
		)
		expect(wrapper.find("a").hasClass("links__icon--link")).toBe(true)
	})

	it("returns 'links__icon--document' class correctly", () => {
		const wrapper = mount(
			<UserContextProvider>
				<ActionPoint linkKind={1} iconKind={4} />
			</UserContextProvider>
		)
		expect(wrapper.find("a").hasClass("links__icon--document")).toBe(true)
	})
})

describe("Test 'renderExternalLink()'", () => {
	it("renders External link text correctly", () => {
		const wrapper = mount(
			<UserContextProvider>
				<ActionPoint linkKind={1} title="External link" />
			</UserContextProvider>
		)
		expect(wrapper.find("a").text()).toBe("External link")
	})
	it("renders href correctly", () => {
		const wrapper = mount(
			<UserContextProvider>
				<ActionPoint linkKind={1} linkExternal="External link" />
			</UserContextProvider>
		)
		expect(wrapper.find("a").prop("href")).toBe("External link")
	})
})

describe("Test 'renderInternalLink()'", () => {
	it("renders Internal link text correctly based on UserContext", () => {
		const wrapper = mount(
			<UserContextProvider>
				<BrowserRouter>
					<ActionPoint linkKind={0} linkInternal="hej" title="Internal link" />
				</BrowserRouter>
			</UserContextProvider>
		)
		expect(wrapper.find("a").at(1).text()).toBe(
			"Internal link visited by johndoe"
		)
	})
	it("renders Internal link prop 'to' correctly based on UserContext", () => {
		const wrapper = mount(
			<UserContextProvider>
				<BrowserRouter>
					<ActionPoint linkKind={0} linkInternal="hej" />
				</BrowserRouter>
			</UserContextProvider>
		)
		expect(wrapper.find("Link").prop("to")).toBe("/summerburst")
	})
})

describe("Test 'renderModalLink()'", () => {
	it("renders Modal link text correctly", () => {
		const wrapper = mount(
			<UserContextProvider>
				<ActionPoint linkKind={2} title="Modal Link" />
			</UserContextProvider>
		)
		expect(wrapper.find("a").text()).toBe("Modal Link")
	})
})

describe("Test 'renderDocumentLink()'", () => {
	it("renders Document link text correctly", () => {
		const wrapper = mount(
			<UserContextProvider>
				<ActionPoint linkKind={3} title="Document Link" />
			</UserContextProvider>
		)
		expect(wrapper.find("a").text()).toBe("Document Link")
	})
	it("renders href correctly", () => {
		const wrapper = mount(
			<UserContextProvider>
				<ActionPoint linkKind={3} linkDocument="Document link" />
			</UserContextProvider>
		)
		expect(wrapper.find("a").prop("href")).toBe("Document link")
	})
})

describe("Test styling props", () => {
	it("renders correct styling", () => {
		const wrapper = mount(
			<UserContextProvider>
				<ActionPoint linkKind={2} top={10} left={10} />
			</UserContextProvider>
		)
		expect(wrapper.find("a").prop("style")).toHaveProperty("top", "10%")
		expect(wrapper.find("a").prop("style")).toHaveProperty("left", "10%")
	})
})
