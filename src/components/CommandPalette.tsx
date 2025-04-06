"use client";
import { useState, useEffect } from "react";
import { Kbd } from "@heroui/react";
import { Modal, ModalContent, useDisclosure } from "@heroui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import React from "react";
import { Command, getCommands } from "./Commands";

export default function CommandPalette() {
  const [os, setOS] = useState("unknown");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const router = useRouter();
  const theme = useTheme();
  const commands = getCommands(router, theme);

  const filteredCommands = commands.filter((command) =>
    command.name.toLowerCase().includes(search.toLowerCase())
  );

  const groupedCommands = filteredCommands.reduce((acc, command) => {
    if (!acc[command.section]) {
      acc[command.section] = [];
    }
    acc[command.section].push(command);
    return acc;
  }, {} as Record<string, Command[]>);

  useEffect(() => {
    const detectOS = () => {
      return window.navigator.userAgent.includes("Mac") ? "mac" : "windows";
    };
    setOS(detectOS());

    const handleKeyDown = (e: KeyboardEvent) => {
      // Handle Cmd/Ctrl + K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        isOpen ? onClose() : onOpen();
      }

      // Handle Escape
      if (e.key === "Escape" && isOpen) {
        onClose();
      }

      // Handle shift + letter combinations
      if (
        isOpen &&
        e.shiftKey &&
        e.key.length === 1 &&
        /[a-zA-Z]/.test(e.key)
      ) {
        const shortcut = ["shift", e.key.toUpperCase()];
        const matchingCommand = commands.find(
          (cmd) =>
            cmd.shortcut &&
            cmd.shortcut.length === shortcut.length &&
            cmd.shortcut.every(
              (key, i) => key.toLowerCase() === shortcut[i].toLowerCase()
            )
        );

        if (matchingCommand) {
          e.preventDefault();
          matchingCommand.action();
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onOpen, onClose, commands]);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <button
          className="flex items-center gap-1 px-2 mt-1 py-0.4 font-mono rounded-md text-md text-muted-foreground dark:bg-stone-700 bg-stone-300 hover:bg-stone-400 transition-all duration-200 hover:scale-110 cursor-pointer"
          onClick={() => onOpen()}
        >
          <Kbd
            keys={os === "mac" ? ["command"] : ["ctrl"]}
            className="no-underline"
          />
          <Kbd className="no-underline">K</Kbd>
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          backdrop: "bg-[#f9eddc]/80 dark:bg-[#0a0c12]/80",
          base: `
            backdrop-blur-md max-w-xl mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            max-h-[70vh] rounded-2xl overflow-hidden flex flex-col
            bg-stone-800/10 dark:bg-stone-500/20
            border border-white/20 dark:border-black/30
            shadow-xl transition-all duration-300
          `,
          closeButton: "hidden",
        }}
      >
        <ModalContent>
          {() => (
            <div className="flex flex-col h-full">
              {/* Search Bar */}
              <div className="flex-shrink-0 p-4">
                <div className="flex items-center justify-between gap-3 px-3 py-2 align-top border rounded-lg bg-muted/50">
                  <div className="flex items-center w-full gap-3">
                    <MagnifyingGlassIcon className="w-5 h-5 text-muted-foreground" />
                    <input
                      placeholder="Search commands..."
                      type="text"
                      value={search}
                      autoFocus
                      onChange={(e) => setSearch(e.target.value)}
                      className="relative w-full bg-transparent border-0 placeholder:text-muted-foreground/50 focus:outline-none"
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    />
                  </div>
                  <Kbd className="flex items-center gap-1 px-2 py-0.65 font-mono rounded-xs text-sm text-muted-foreground bg-muted transition-all duration-200 hover:scale-110 cursor-pointer">
                    Esc
                  </Kbd>
                </div>
              </div>

              {/* Commands */}
              <div className="flex-1 px-4 pb-4 overflow-y-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent">
                <div className="space-y-4">
                  {Object.entries(groupedCommands).map(
                    ([section, commands]) => (
                      <div key={section}>
                        <div className="px-2 mb-2 text-xs font-medium text-muted-foreground">
                          {section}
                        </div>
                        <div className="space-y-1">
                          {commands.map((command) => (
                            <button
                              key={command.id}
                              onClick={() => {
                                command.action();
                                onClose();
                              }}
                              className="flex items-center justify-between w-full px-2 py-2 text-sm transition-all duration-150 rounded-md hover:bg-stone-500 dark:hover:bg-stone-500 hover:text-white focus:outline-none"
                            >
                              <span>{command.name}</span>
                              {command.shortcut && (
                                <div className="flex items-center gap-1">
                                  {command.shortcut.map((key, index) => (
                                    <Kbd
                                      key={index}
                                      className="flex items-center gap-1 px-2 mt-1 py-0.65 font-mono rounded-xs text-md text-muted-foreground bg-muted transition-all duration-200 hover:scale-110 cursor-pointer"
                                    >
                                      {key}
                                    </Kbd>
                                  ))}
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
