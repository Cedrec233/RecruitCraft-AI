import React from 'react';

// Using React.createElement for icons to avoid external dependencies like react-icons and to work in .ts files
export const ICONS = {
  Chat: (props: React.SVGProps<SVGSVGElement>) => 
    React.createElement("svg", { 
      xmlns: "http://www.w3.org/2000/svg", 
      fill: "none", 
      viewBox: "0 0 24 24", 
      strokeWidth: 1.5, 
      stroke: "currentColor", 
      ...props 
    },
      React.createElement("path", { 
        strokeLinecap: "round", 
        strokeLinejoin: "round", 
        d: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" 
      })
    ),
  Sparkles: (props: React.SVGProps<SVGSVGElement>) => 
    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      ...props
    },
      React.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      })
    ),
  Brain: (props: React.SVGProps<SVGSVGElement>) => 
    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      ...props
    },
      React.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.854 1.591-2.16 1.722-.566 2.91-2.164 2.91-3.953 0-2.486-2.015-4.5-4.5-4.5s-4.5 2.014-4.5 4.5c0 1.789 1.188 3.387 2.91 3.953.933.306 1.591 1.177 1.591 2.16v.192m6-6.698a2.969 2.969 0 0 0-2.16-2.16 5.969 5.969 0 0 0-3.84 0 2.969 2.969 0 0 0-2.16 2.16m12 0a2.969 2.969 0 0 1-2.16 2.16 5.969 5.969 0 0 1-3.84 0 2.969 2.969 0 0 1-2.16-2.16"
      })
    ),
  Briefcase: (props: React.SVGProps<SVGSVGElement>) => 
    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      ...props
    },
      React.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 2.25 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0"
      })
    ),
  Send: (props: React.SVGProps<SVGSVGElement>) => 
    React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      ...props
    },
      React.createElement("path", {
        d: "M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"
      })
    ),
};

export const MODEL_NAME = 'gemini-3-pro-preview';
