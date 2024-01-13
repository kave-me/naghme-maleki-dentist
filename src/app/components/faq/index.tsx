import { SectionHeader } from "@/app/components/SectionHeader";
import { Accordion } from "flowbite";
import type {
  AccordionOptions,
  AccordionItem,
  AccordionInterface,
} from "flowbite";
import type { InstanceOptions } from "flowbite";

const accordionEl = document.querySelector("#accordion-example");

// create an array of objects with the id, trigger element (eg. button), and the content element
const accordionItems: AccordionItem[] = [
  {
    id: "accordion-example-heading-1",
    triggerEl: document.querySelector("#accordion-example-heading-1"),
    targetEl: document.querySelector("#accordion-example-body-1"),
    active: true,
  },
  {
    id: "accordion-example-heading-2",
    triggerEl: document.querySelector("#accordion-example-heading-2"),
    targetEl: document.querySelector("#accordion-example-body-2"),
    active: false,
  },
  {
    id: "accordion-example-heading-3",
    triggerEl: document.querySelector("#accordion-example-heading-3"),
    targetEl: document.querySelector("#accordion-example-body-3"),
    active: false,
  },
];

// options with default values
const options: AccordionOptions = {
  alwaysOpen: true,
  activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
  inactiveClasses: "text-gray-500 dark:text-gray-400",
  onOpen: (item) => {
    console.log("accordion item has been shown");
    console.log(item);
  },
  onClose: (item) => {
    console.log("accordion item has been hidden");
    console.log(item);
  },
  onToggle: (item) => {
    console.log("accordion item has been toggled");
    console.log(item);
  },
};

// instance options object
const instanceOptions: InstanceOptions = {
  id: "accordion-example",
  override: true,
};

/*
 * accordionEl: HTML element (required)
 * accordionItems: array of accordion item objects (required)
 * options (optional)
 * instanceOptions (optional)
 */
const accordion: AccordionInterface = new Accordion(
  accordionEl,
  accordionItems,
  options,
  instanceOptions
);

// open accordion item based on id
accordion.open("accordion-example-heading-2");

// destroy accordion
accordion.destroy();

// re-initialize accordion
accordion.init();

export default function FaqSection() {
  return (
    <section className={"flex flex-col  items-center rtl pt-32"}>
      <SectionHeader name={"سوالات متداول"} category={"سوالات شما"} />

      <div id="accordion-example">
        <h2 id="accordion-example-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-expanded="true"
            aria-controls="accordion-example-body-1"
          >
            <span>What is Flowbite?</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-example-body-1"
          className="hidden"
          aria-labelledby="accordion-example-heading-1"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{" "}
              <a
                href="/docs/getting-started/introduction/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                get started
              </a>{" "}
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </div>
        </div>
        <h2 id="accordion-example-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-expanded="false"
            aria-controls="accordion-example-body-2"
          >
            <span>Is there a Figma file available?</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-example-body-2"
          className="hidden"
          aria-labelledby="accordion-example-heading-2"
        >
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the{" "}
              <a
                href="https://flowbite.com/figma/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Figma design system
              </a>{" "}
              based on the utility classNamees from Tailwind CSS and components
              from Flowbite.
            </p>
          </div>
        </div>
        <h2 id="accordion-example-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-expanded="false"
            aria-controls="accordion-example-body-3"
          >
            <span>
              What are the differences between Flowbite and Tailwind UI?
            </span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-example-body-3"
          className="hidden"
          aria-labelledby="accordion-example-heading-3"
        >
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
